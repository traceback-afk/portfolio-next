export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        prose
        prose-invert
        max-w-3xl
        mx-auto

        text-zinc-300

        prose-headings:font-semibold
        prose-headings:text-zinc-100
        prose-headings:tracking-tight

        prose-h1:text-4xl
        prose-h1:mb-6

        prose-h2:text-3xl
        prose-h2:mt-12
        prose-h2:mb-4

        prose-h3:text-2xl
        prose-h3:mt-8
        prose-h3:mb-3

        prose-p:leading-7
        prose-p:text-zinc-300

        prose-a:text-rose-400
        prose-a:no-underline
        hover:prose-a:text-rose-300

        prose-strong:text-white

        prose-code:not(pre > code):text-rose-400
        prose-code:not(pre > code):bg-zinc-800
        prose-code:not(pre > code):px-1.5
        prose-code:not(pre > code):py-0.5
        prose-code:not(pre > code):rounded
        prose-code:not(pre > code):before:content-none
        prose-code:not(pre > code):after:content-none

        /* FENCED CODE BLOCKS */
        prose-pre:bg-zinc-900
        prose-pre:border prose-pre:border-zinc-800
        prose-pre:rounded-xl
        prose-pre:p-4
        prose-pre:overflow-x-auto


        prose-hr:border-zinc-800

        prose-blockquote:border-l-rose-500
        prose-blockquote:text-zinc-300
      "
    >
      {children}
    </div>
  );
}