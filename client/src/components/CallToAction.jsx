import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-green-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
       <div className="flex-1 flex justify-center flex-col items-center">
  <h2 className="text-2xl">
    Want to learn about MongoDb?
  </h2>
  <p className="text-gray-500 my-2">
    Checkout these resources
  </p>
  <Button className="w-40 mt-5 bg-green-400 hover:bg-green-600 text-white p-2">
    <a href="https://youtu.be/c2M-rlkkT5o?si=byYi2Xd5SllrGT_l" target="_blank" rel="noopener noreferrer">
      Visit
    </a>
  </Button>
</div>



        <div className="p-7 flex-1">
            <img src="https://web-cms.biznetgio.com/uploads/2023_July_Banner_Artikel_Mongo_Db_029eab6f34.jpg" />
        </div>
    </div>
  )
}