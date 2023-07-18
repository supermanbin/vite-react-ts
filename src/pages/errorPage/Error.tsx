import {useRouteError} from 'react-router-dom'

export default function Error() {
  const {error}:any = useRouteError();
  console.log(error);
  
  return (
    <div className="grid place-items-center h-full absolute w-screen">
      <div>
      <h1 className='text-2xl'>Opps!</h1>
      <p className='text-lg my-3'>Sorry, an unexpected error has occurred.</p>
      <p className='text-slate-400'><i>{error.message}</i></p>
      </div>
    </div>
  )
}