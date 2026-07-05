import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cover from '../components/layout/Cover'
import HeritageCarousel from '../components/layout/HeritageCarousel'
import TableOfContents from '../components/layout/TableOfContents'
import CraftsSection from '../components/sections/CraftsSection'
import InheritorsSection from '../components/sections/InheritorsSection'
import TimelineSection from '../components/sections/TimelineSection'
import AIDecode from '../components/layout/AIDecode'
import Footer from '../components/layout/Footer'
import PageNav from '../components/layout/PageNav'
import InkBackdrop from '../components/layout/InkBackdrop'
import TextCursor from '../components/ui/TextCursor'
import { useAppStore } from '../store/useAppStore'

export default function Home() {
  const { id } = useParams()
  const openAI = useAppStore((s) => s.openAI)

  useEffect(() => {
    if (id) {
      setTimeout(() => {
        const el = document.getElementById(`craft-${id}`)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 200)
      openAI(id)
    }
  }, [id, openAI])

  return (
    <div className="relative min-h-screen bg-cream">
      <InkBackdrop />
      <PageNav />
      <main>
        <Cover />
        <HeritageCarousel />
        <TableOfContents />
        <CraftsSection />
        <TimelineSection />
        <InheritorsSection />
        <AIDecode />
        <Footer />
      </main>
      {/* 皮影小人光标效果 */}
      <TextCursor
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.4}
        removalInterval={25}
        maxPoints={6}
      />
    </div>
  )
}
