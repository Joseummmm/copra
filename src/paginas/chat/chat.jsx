import React from "react";

export const Chat = () => {
  return (
    <div>
      <div>
        <div class="w-full p-6">
          <div class="p-2 flex justify-start">
            <div class="p-2 bg-blue-600 w-4/6 border rounded-lg text-white drop-shadow-xl">
              <p class="col-span-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                at est congue, tempor turpis non, placerat metus. Phasellus a
                eros vel diam viverra fermentum. Donec auctor vulputate gravida.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                scelerisque scelerisque lectus, et maximus mi rutrum at.
                Curabitur at nisl interdum, posuere urna quis, ultrices ligula.
                Nam facilisis quam felis, a efficitur orci condimentum ut. In
                augue neque, aliquam et arcu eget, finibus laoreet dui. In hac
                habitasse platea dictumst.
              </p>
              <p class="text-end">00:00</p>
            </div>
          </div>
          <div class="p-2 w-full flex justify-end">
            <div class="p-2 w-4/6 border border-black rounded-lg drop-shadow-xl">
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Aliquam et nunc tincidunt, semper erat
                et, aliquet metus. Aliquam sed sem nisl. Etiam eget orci nulla.
                Quisque accumsan dictum lacus, sit amet dictum odio porttitor
                ac. Pellentesque vulputate tellus ut neque luctus cursus.
              </p>
              <p class="text-end">00:00</p>
            </div>
          </div>
          <div class="p-2 flex justify-start">
            <div class="p-2 bg-blue-600 w-4/6 border rounded-lg text-white drop-shadow-xl">
              <p class="col-span-full">
                Integer auctor turpis condimentum diam placerat, non lobortis
                purus efficitur. Vestibulum facilisis accumsan velit, ac
                hendrerit quam viverra quis. Curabitur semper odio sed elementum
                blandit. Suspendisse nec consectetur nunc. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed nibh ipsum, vehicula a
                sagittis ac, faucibus maximus odio. Maecenas quis laoreet
                turpis.
              </p>
              <p class="text-end">00:00</p>
            </div>
          </div>
          <div class="p-2 w-full flex justify-end">
            <div class="p-2 w-4/6 border border-black rounded-lg drop-shadow-xl">
              <p>
                Sed imperdiet enim ornare quam euismod, vel facilisis elit
                auctor. Etiam lacinia urna vel tincidunt commodo. Quisque
                condimentum eu neque nec porta. Fusce at nunc vel enim commodo
                auctor ut pulvinar ante. Maecenas id diam magna. Sed fringilla
                augue magna, quis consectetur elit tincidunt sagittis. Mauris
                pharetra orci lacus, sed aliquet eros consequat nec. Suspendisse
                libero nisl, fermentum eget pretium nec, sodales nec sem. Fusce
                a mauris a eros venenatis rhoncus. Duis maximus dignissim
                congue.
              </p>
              <p class="text-end">00:00</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <form class="w-3/4 m-auto grid grid-cols-8">
          <span class="p-2 col-span-7">
            <input
              type="text"
              placeholder="Mensaje"
              class="placeholder-black border border-black rounded-xl py-1 px-2 w-full drop-shadow-xl"
            />
          </span>
          <span class="p-2 col-span-1">
            <button type="submit" class="py-1 w-full drop-shadow-xl">
              <img src="rsc/Iconos/avion-de-papel.png" class="h-7" />
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};
