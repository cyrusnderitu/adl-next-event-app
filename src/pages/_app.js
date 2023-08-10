import '@/styles/globals.css'
import SpeakerContext from '@/context/speakerContext'
import useSpeaker from '@/Hooks/useSpeaker'

export default function App({ Component, pageProps }) {
  const speakers = useSpeaker();
  return (
    <SpeakerContext.Provider value={speakers}>
      <Component {...pageProps} />
    </SpeakerContext.Provider>
  ) 
}
