export default function Header5() {
  return (
    <section className="py-12 bg-white  text-zinc-900 ">
      <div className="container px-4">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3 text-center">
            <h1 className="text-[35px] leading-tight md:text-6xl font-bold">
              Page Heading
            </h1>
            <p className="text-xl leading-snug opacity-75 mt-6 md:px-8 lg:px-20">
              Metus, iaculis aliquam convallis vitae placerat ullamcorper cum id
              id. Gravida est est, sapien, lacus. Cursus facilisis tortor
              feugiat maecenas gravida consequat non blandit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
