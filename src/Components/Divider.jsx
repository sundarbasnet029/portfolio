export function Divider({height}){
  console.log(typeof height);
    return(
        <div 
        style={{ height: `${height}px` }}
        className={`shrink-0 border border-solid border-border-strong bg-bg-0 bg-diagonal-strong` }/>

    )
}