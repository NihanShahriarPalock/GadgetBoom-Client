import { Circles } from "react-loader-spinner";


const Loading = () => {
  return (
    <div>
      <div className='min-h-screen min-w-full flex justify-center items-center'>
        <Circles
          height='80'
          width='80'
          color='#4fa94d'
          ariaLabel='circles-loading'
          wrapperStyle={{}}
          wrapperClass=''
          visible={true}
        />
      </div>
    </div>
  );
}

export default Loading