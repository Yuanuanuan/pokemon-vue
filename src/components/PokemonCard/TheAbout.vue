<template>
  <div class="about-wrapper">
    <div class="about-box">
      <div class="stature-box">
        <h1 class="title">Stature</h1>
        <div class="height flexStart">
          <h1 class="text">Height :</h1>
          <div class="value">{data.height * 10} cm</div>
        </div>
        <div class="weight flexStart">
          <h1 class="text">Weight :</h1>
          <div class="value">{(data.weight / 10).toFixed(1)} kg</div>
        </div>
      </div>
      <div class="stats-box">
        <h1 class="title">Stats</h1>
        <div class="stats-info">
          {data.stats.map((stat, index) => { return (
          <div class="stat flexStart" key="{index}">
            <h1 class="text">{stat.stat.name}</h1>
            <div class="value">{stat.base_stat}</div>
          </div>
          ) })}
        </div>
      </div>
    </div>
  </div>
</template>
