import { useRef } from 'react';
import './App.css';
import ScrollableBox, { ScrollableRef } from './ScrollableBox';

function App() {
  const boxRef = useRef<ScrollableRef>(null);

  // function scrollToBotton() {
  //   if (boxRef.current) {
  //     // boxRef.current.scrollTop = boxRef.current.scrollHeight;
  //     boxRef.current.focus();
  //   }
  // }

  return (
    <div className='App'>
      <ScrollableBox ref={boxRef} width={120} height={120}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores ex
          suscipit incidunt ad libero. Accusantium rerum error, porro, unde
          quibusdam eaque delectus, perspiciatis id est facere numquam vel sint
          perferendis commodi qui dignissimos dolorum aliquid. Dignissimos,
          molestiae suscipit esse impedit consequatur delectus! Fugit, quasi.
          Accusantium laborum laudantium, magnam voluptas itaque tempore
          aspernatur molestias id ea non reiciendis sed perferendis rem
          cupiditate cumque. Quidem rem animi accusamus qui excepturi nihil quia
          commodi voluptatum iure soluta ipsum deserunt quo temporibus
          blanditiis voluptatibus ad repellat odio, numquam ab mollitia deleniti
          corporis. Quis earum eos ratione mollitia quibusdam! Consequatur sit
          quisquam ab animi sequi ducimus, itaque commodi, aliquam dolorum
          harum, laborum cupiditate ipsum hic tenetur optio provident! Animi
          porro exercitationem, atque itaque consectetur qui minus provident
          assumenda nulla nam? Ratione voluptate sequi placeat natus dicta culpa
          in similique nam nulla expedita, illum deserunt eaque obcaecati, et
          consequatur nostrum labore dignissimos ab cupiditate quam quas
          doloribus. Molestiae cum doloremque, necessitatibus unde delectus
          possimus illum odio aliquid fuga incidunt, qui provident quia dolore
          temporibus non autem. Aut aspernatur, ratione sequi inventore minima
          magnam in! Culpa provident placeat explicabo omnis eius fugit?
          Exercitationem deserunt culpa voluptatem inventore officiis quis, rem
          aliquid corporis laudantium? Commodi rem recusandae ex!
        </p>
      </ScrollableBox>
      <button onClick={() => boxRef.current?.scrollToBottom()}>descer</button>
    </div>
  );
}

export default App;
