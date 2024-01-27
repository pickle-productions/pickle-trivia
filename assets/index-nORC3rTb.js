(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const m=[{id:14,name:"--select--"},{id:15,name:"Entertainment: Video Games"}],y={trivia_categories:m},f=0,g=[{type:"multiple",difficulty:"medium",category:"Entertainment: Video Games",question:'In the Super Mario Bros. series, what game is the "Carrot" power-up from?',correct_answer:"Super Mario Land 2: The 6 Golden Coins",incorrect_answers:["Super Mario World","Super Mario Land","Super Mario 3D Land"]},{type:"multiple",difficulty:"easy",category:"Entertainment: Video Games",question:"What was the name of the canceled projected by Blizzard Entertainment that would be later become Overwatch?",correct_answer:"Titan",incorrect_answers:["Omnic","Omega","Ghost"]},{type:"multiple",difficulty:"medium",category:"Entertainment: Video Games",question:'The walls of the Goldenrod City Gym in "Pokémon Gold and Silver" are arranged in the shape of which Pokémon?',correct_answer:"Clefairy",incorrect_answers:["Bulbasaur","Pikachu","Pidgey"]},{type:"multiple",difficulty:"medium",category:"Entertainment: Video Games",question:'What is the name of the currency in the "Animal Crossing" series?',correct_answer:"Bells",incorrect_answers:["Sea Shells","Leaves","Bugs"]},{type:"multiple",difficulty:"medium",category:"Entertainment: Video Games",question:'The protagonist in the game "Cave Story" is named',correct_answer:"Quote",incorrect_answers:["Kazuma","Curly","Arthur"]},{type:"multiple",difficulty:"hard",category:"Entertainment: Video Games",question:"Which occupation did John Tanner, the main protagonist for Driver and Driver 2, had before turning into an undercover cop?",correct_answer:"Racing Driver",incorrect_answers:["Taxi Driver","Delivery Driver","Getaway Driver"]},{type:"multiple",difficulty:"medium",category:"Entertainment: Video Games",question:'Who was the mascot of SEGA before "Sonic the Hedgehog"?',correct_answer:"Alex Kidd",incorrect_answers:["Opa Opa","NiGHTS","Ristar"]},{type:"multiple",difficulty:"easy",category:"Entertainment: Video Games",question:"Which of the following characters is NOT a female marriage candidate in the game Stardew Valley?",correct_answer:"Caroline",incorrect_answers:["Abigail","Haley","Leah"]},{type:"multiple",difficulty:"medium",category:"Entertainment: Video Games",question:'In "Fallout 4", what is the name of the dog you find at Red Rocket truck stop?',correct_answer:"Dogmeat",incorrect_answers:["Sparky","Quazar","Chop"]},{type:"multiple",difficulty:"medium",category:"Entertainment: Video Games",question:"On which planet does the game Freedom Planet (2014) take place?",correct_answer:"Avalice",incorrect_answers:["Freedom","Galaxytrail","Shang Mu"]}],h={response_code:f,results:g},p=async()=>{let[t,e]=[null,Error("fetch")];return e&&(console.error("Error fetching categories, using local JSON instead:",e),t=y,console.log(t)),t.trivia_categories},w=async t=>{let[e,o]=[null,Error("api down")];return o&&(console.error("Error fetching, using local json instead:",o),e=h),e},E=t=>{const e=document.querySelector("#category-select");t.forEach(o=>{const s=document.createElement("option");s.value=o.id,s.textContent=o.name,e.appendChild(s)})};let l=0,i=0;const S=()=>{l=0,i=10};function d(){document.querySelectorAll(".answer").forEach(e=>{let o=4;for(e.style.fontSize=`${o}vw`;e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth;)o-=.2,e.style.fontSize=`${o}vw`})}function v(t){let e=document.getElementById("score");e.innerText=`SCORE: ${t}/10`}d();function u(t){if(i===0)document.getElementById("score-page").style.display="block",document.getElementById("main-menu").style.display="none",document.getElementById("game-play").style.display="none",v(l);else{document.getElementById("question").textContent=t.results[i-1].question,console.log(t.results[i-1].question);let e=[...t.results[i-1].incorrect_answers,t.results[i-1].correct_answer];e.sort(()=>Math.random()-.5),d(),document.getElementById("one").textContent=e[0],document.getElementById("two").textContent=e[1],document.getElementById("three").textContent=e[2],document.getElementById("four").textContent=e[3],_(t),i--,console.log(i)}}function _(t){document.querySelectorAll(".answer").forEach(o=>{o.addEventListener("click",function(){const s=this.textContent,n=t.results[i].correct_answer;s===n?(o.style.boxShadow="0 0 10px green",l++):o.style.boxShadow="0 0 10px red",setTimeout(()=>{o.style.boxShadow=""},1e3)})})}let a=null;const q=new Audio("src/audio/2 Minutes Countdown Timer with Relaxing Jazz Background Music.mp3"),C=async()=>{try{const t=await p();E(t)}catch(t){console.error(t.message)}};C();const G=document.querySelector("#category-select"),x=document.querySelector("#play-button");G.addEventListener("change",async t=>{console.log("change occurred"),a=await w(t.target.value)});x.addEventListener("click",function(){console.log(a),a?(document.querySelector("#game-play").style.display="block",document.querySelector("#main-menu").style.display="none",S(),u(a),q.play()):console.error("No questions data available")});const B=document.getElementById("next-button");B.addEventListener("click",()=>{u(a)});
