import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '@/theme'
import ChatBubble from '@/components/chat/ChatBubble'
import ChatInput from '@/components/chat/ChatInput'

interface Message {
  id:     string
  text:   string
  sender: 'bot' | 'user'
  name?:  string
}

const INITIAL_MESSAGES: Message[] = [
  { id: '1', sender: 'bot',  text: 'أنا هنا من أجلك. ما الذي يشغل بالك اليوم؟', name: 'بوت الهدوء' },
  { id: '2', sender: 'bot',  text: 'سواء كنت بحاجة للتنفيس، أو التعامل مع شعور ما، أو مجرد التنفس معاً، فهذا مساحة آمنة.', name: 'بوت الهدوء' },
  { id: '3', sender: 'user', text: 'لقد شعرت ببعض الإرهاق بسبب العمل مؤخراً. من الصعب التوقف عن التفكير.', name: 'أنا' },
]

const BOT_REPLIES = [
  'شكراً لك على مشاركة ذلك معي. يتطلب الأمر قوة للاعتراف عندما تشعر أن الأمور ثقيلة. هل يمكنك وصف المكان الذي تشعر فيه بهذا الإرهاق في جسمك الآن؟',
  'أفهم ما تشعر به. الإرهاق من العمل شعور شائع جداً. هل تريد أن نجرب تمرين تنفس بسيط معاً؟',
  'أنت لست وحدك في هذا. دعنا نتنفس معاً قليلاً، وخذ وقتك.',
  'هذا الوعي بمشاعرك هو خطوة مهمة. ما الذي يجعل هذه الفترة صعبة تحديداً؟',
]

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = (text: string) => {
    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text, name: 'أنا' }
    setMessages((prev) => [...prev, userMsg])

    setTimeout(() => {
      const reply = BOT_REPLIES[Math.floor(Math.random() * BOT_REPLIES.length)]
      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: reply, name: 'بوت الهدوء' }
      setMessages((prev) => [...prev, botMsg])
    }, 1200)
  }

  return (
    <div className="flex flex-col h-[calc(100dvh-4rem)] pt-0">
      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4 hide-scrollbar pb-40">
        <motion.div variants={{ visible: { transition: { staggerChildren: 0.1 } } }} initial="hidden" animate="visible">
          {messages.map((m) => (
            <motion.div key={m.id} variants={fadeUp} className="mb-4">
              <ChatBubble message={m.text} sender={m.sender} senderName={m.name} />
            </motion.div>
          ))}
        </motion.div>
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <ChatInput onSend={handleSend} />
    </div>
  )
}
