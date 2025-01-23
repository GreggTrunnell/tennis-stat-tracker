import Players from "../Players/Players";


function MatchStats( ) {
  
  return (
    <div class="container text-center">
    <div class="row">
      <div class="col">
      <Players name="Keys" />
      </div>
      <img className="w-50 h-50" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGVhfwFVx_VaJ3LP-KCdE6xdSWAs6C9_qaAw&s"/>
      <div class="col">
      <Players name="Keys" />
      </div>
    </div>
  </div>
  );
  }

export default MatchStats;

<div className='players-container'>
<Players name="Keys" />
<Players name="Keys" />
</div>