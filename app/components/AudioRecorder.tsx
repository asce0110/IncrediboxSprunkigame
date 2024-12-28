import { useState, useRef } from 'react';
import { Mic, Square, Download, Play, Pause } from 'lucide-react';

export default function AudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);

  const startRecording = async () => {
    try {
      setError(null);

      // Get list of audio devices
      const devices = await navigator.mediaDevices.enumerateDevices();
      const audioDevice = devices.find(device => 
        device.kind === 'audioinput' && 
        device.label.toLowerCase().includes('system')
      );

      if (!audioDevice) {
        throw new Error('No system audio device found');
      }

      // Request audio stream
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          deviceId: audioDevice.deviceId,
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false
        }
      });

      // Create MediaRecorder
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setRecordedAudio(audioUrl);
        setIsRecording(false);
        
        // Stop all tracks
        stream.getTracks().forEach(track => track.stop());
      };

      // Start recording
      mediaRecorder.start(1000); // Collect data every second
      setIsRecording(true);

    } catch (error: any) {
      console.error('Failed to start recording:', error);
      if (error.name === 'NotAllowedError') {
        setError('Please allow access to record audio');
      } else if (error.message === 'No system audio device found') {
        setError('System audio recording is not supported in your browser');
      } else {
        setError(`Failed to start recording: ${error.message || 'Unknown error'}`);
      }
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      try {
        mediaRecorderRef.current.stop();
      } catch (error) {
        console.error('Error stopping recording:', error);
        setError('Failed to stop recording. Please try again.');
      }
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleDownload = () => {
    if (recordedAudio) {
      const a = document.createElement('a');
      a.href = recordedAudio;
      a.download = 'audio-recording.webm';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="p-4 bg-black/90 rounded-lg shadow-lg w-96">
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        {!isRecording && !recordedAudio && (
          <button
            onClick={startRecording}
            className="w-full py-2 bg-[#2EE59D]/20 hover:bg-[#2EE59D]/30 text-[#2EE59D] rounded-lg flex items-center justify-center gap-2"
          >
            <Mic className="w-4 h-4" />
            Start Recording
          </button>
        )}

        {isRecording && (
          <button
            onClick={stopRecording}
            className="w-full py-2 bg-red-500/20 hover:bg-red-500/30 text-red-500 rounded-lg flex items-center justify-center gap-2"
          >
            <Square className="w-4 h-4" />
            Stop Recording
          </button>
        )}

        {recordedAudio && (
          <div className="space-y-4">
            <audio ref={audioRef} src={recordedAudio} onEnded={() => setIsPlaying(false)} />
            <div className="flex items-center justify-between">
              <button
                onClick={handlePlayPause}
                className="flex items-center gap-2 text-[#2EE59D]"
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Play
                  </>
                )}
              </button>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 text-[#2EE59D]"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
            <button
              onClick={() => {
                setRecordedAudio(null);
                setIsPlaying(false);
              }}
              className="w-full py-2 bg-[#2EE59D]/20 hover:bg-[#2EE59D]/30 text-[#2EE59D] rounded-lg"
            >
              Record Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 