import * as Radios from '@radix-ui/react-radio-group';

export function RadiosGroup() {
  return (
    <Radios.Root 
      className="flex flex-col gap-4 mt-6"
      defaultValue="default" 
      aria-label="View density"
    >
      <div className='flex items-center'>
        <Radios.Item 
          className="bg-white w-4 h-4 rounded-full" 
          value="default" 
          id="r1"
        >
          <Radios.Indicator className="flex items-center justify-center w-full h-full relative" />
        </Radios.Item>
        <label 
          className="text-main text-sm pl-2" 
          htmlFor="r1"
        >
          Default
        </label>
      </div>
      <div className='flex items-center'>
        <Radios.Item 
          className="bg-white opacity-80 w-4 h-4 rounded-full" 
          value="default" 
          id="r1"
        >
          <Radios.Indicator className="flex items-center justify-center w-full h-full relative" />
        </Radios.Item>
        <label 
          className="text-main opacity-80 text-sm pl-2" 
          htmlFor="r1"
        >
          Default
        </label>
      </div>
      <div className='flex items-center'>
        <Radios.Item 
          className="bg-white opacity-80 w-4 h-4 rounded-full" 
          value="default" 
          id="r1"
        >
          <Radios.Indicator className="flex items-center justify-center w-full h-full relative" />
        </Radios.Item>
        <label 
          className="text-main opacity-80 text-sm pl-2" 
          htmlFor="r1"
        >
          Default
        </label>
      </div>
      <div className='flex items-center'>
        <Radios.Item 
          className="bg-white opacity-80 w-4 h-4 rounded-full" 
          value="default" 
          id="r1"
        >
          <Radios.Indicator className="flex items-center justify-center w-full h-full relative" />
        </Radios.Item>
        <label 
          className="text-main opacity-80 text-sm pl-2" 
          htmlFor="r1"
        >
          Default
        </label>
      </div>
    </Radios.Root>
  );
}