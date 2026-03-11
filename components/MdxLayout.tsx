export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        prose
        max-w-full
        wrap-break-word
        w-full
        prose-pre:rounded-none
        prose-headings:font-semibold
      prose-headings:text-zinc-100
        prose-headings:scroll-mt-30
        prose-h1:text-5xl
        prose-h2:text-4xl
        prose-h3:text-3xl
        prose-h4:text-2xl
        prose-h5:text-xl
        prose-h6:text-lg
        prose-p:leading-relaxed
        prose-p:text-zinc-400
        prose-blockquote:border-l-4
        prose-blockquote/quote:text-zinc-500

        [&_:not(pre)>code]:bg-zinc-800/80
        [&_:not(pre)>code]:text-rose-500
        [&_:not(pre)>code]:px-1.5
        [&_:not(pre)>code]:py-1
        [&_:not(pre)>code]:rounded-none
        [&_:not(pre)>code]:font-light
        [&_:not(pre)>code::before]:hidden
        [&_:not(pre)>code::after]:hidden

        prose-pre:text-white
        prose-pre:p-4
        prose-pre:bg-zinc-900
        prose-ul:list-disc
        prose-ol:list-decimal
        prose-li:my-1
        prose-a:underline
        prose-img:shadow-md
        prose-blockquote:border-l-zinc-700
        prose-blockquote/quote:text-zinc-400
        prose-a:text-blue-400
        prose-li:text-zinc-300

      "
    >
      {children}
    </div>
  )
}