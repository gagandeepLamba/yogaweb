"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { MessageSquareText, Send, Sparkles, X } from "lucide-react";
import { getChatbotReply, mainMenuReplies, type QuickReply } from "@/lib/chatbot";
import { siteConfig } from "@/lib/site-config";
import { StyleIcon } from "@/components/ui/style-icon";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  quickReplies?: QuickReply[];
}

const greeting: Message = {
  id: "greeting",
  role: "bot",
  text: `Namaste! 🙏 I'm the ${siteConfig.shortName} assistant. Ask me about pricing, yoga styles, hours, or booking — or pick a topic below.`,
  quickReplies: mainMenuReplies,
};

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `msg-${idCounter}`;
}

export function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function respondTo(userText: string) {
    const { answer, quickReplies } = getChatbotReply(userText);
    setMessages((prev) => [
      ...prev,
      { id: nextId(), role: "user", text: userText },
      { id: nextId(), role: "bot", text: answer, quickReplies },
    ]);
  }

  function handleQuickReply(reply: QuickReply) {
    if (reply.message === "__menu") {
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "user", text: reply.label },
        { ...greeting, id: nextId() },
      ]);
      return;
    }

    if (reply.message.startsWith("__nav:")) {
      const path = reply.message.replace("__nav:", "");
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "user", text: reply.label },
        { id: nextId(), role: "bot", text: `Taking you to ${path} now.` },
      ]);
      router.push(path);
      setOpen(false);
      return;
    }

    if (reply.message.startsWith("__whatsapp:")) {
      const text = reply.message.replace("__whatsapp:", "");
      window.open(siteConfig.contact.whatsappHref(text), "_blank", "noopener,noreferrer");
      return;
    }

    respondTo(reply.message);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    respondTo(trimmed);
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        aria-expanded={open}
        className="fixed bottom-24 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sage-600 text-cream shadow-lg shadow-sage-900/30 transition-transform hover:scale-105 active:scale-95"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquareText className="h-6 w-6" />}
      </button>

      {open ? (
        <div className="fixed inset-x-4 bottom-[9.5rem] z-40 flex h-[70vh] max-h-[520px] flex-col overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-2xl shadow-charcoal/20 sm:inset-x-auto sm:right-6 sm:w-96">
          <div className="flex items-center gap-3 border-b border-charcoal/8 bg-sage-600 px-5 py-4 text-cream">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/20">
              <StyleIcon icon="lotus" className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-base font-medium">{siteConfig.shortName} Assistant</p>
              <p className="flex items-center gap-1 text-xs text-cream/80">
                <Sparkles className="h-3 w-3" /> Usually replies instantly
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className={cn("flex flex-col", message.role === "user" ? "items-end" : "items-start")}>
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                    message.role === "user"
                      ? "rounded-br-sm bg-sage-600 text-cream"
                      : "rounded-bl-sm bg-cream-deep text-charcoal"
                  )}
                >
                  {message.text}
                </div>
                {message.quickReplies ? (
                  <div className="mt-2 flex flex-wrap justify-start gap-2">
                    {message.quickReplies.map((reply) => (
                      <button
                        key={reply.label}
                        type="button"
                        onClick={() => handleQuickReply(reply)}
                        className="rounded-full border border-sage-300 bg-white px-3 py-1.5 text-xs font-medium text-sage-700 transition-colors hover:bg-sage-50"
                      >
                        {reply.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-charcoal/8 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about pricing, styles, hours…"
              className="flex-1 rounded-full border border-charcoal/10 bg-cream px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal-faint focus:border-sage-400 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage-600 text-cream transition-colors hover:bg-sage-700"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
