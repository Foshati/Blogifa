import Image from "next/image";

function App() {
  return (
    // mt-[70px]
    <div className="flex ">
      <div className="flex flex-col">
        <h2>About Agency</h2>
        <h3>
          We create digital ideas that are bigger, bolder, braver and better.
        </h3>
        <p>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.s
        </p>

        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  2.7K
                </h2>
                <p class="leading-relaxed">Users</p>
              </div>
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  1.8K
                </h2>
                <p class="leading-relaxed">Subscribes</p>
              </div>
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  35
                </h2>
                <p class="leading-relaxed">Downloads</p>
              </div>
              <div class="p-4 sm:w-1/4 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  4
                </h2>
                <p class="leading-relaxed">Products</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <Image
          src="/image/aboutfa.gif"
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}

export default App;
