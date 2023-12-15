<template>
  <div class="moves-wrapper">
    <div class="moves-box">
      <div class="title">Moves</div>
      <div class="moves-content">
        {data.moves.map((move, index) => { return (
        <h3 key="{index}">{move.move.name}</h3>
        ) })}
      </div>
    </div>
  </div>
</template>
