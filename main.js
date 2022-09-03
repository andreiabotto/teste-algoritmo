import Smootie from "./smootie.js";
import { readFile } from 'fs/promises';

const MENU = JSON.parse(await readFile(new URL('./sorvetes.json', import.meta.url)));

console.log("*************************************************");
console.log("****               MENU ORIGINAL             ****");
console.log("*************************************************");

console.log(MENU);

console.log("*************************************************");
console.log("****                 TESTES                  ****");
console.log("*************************************************");

console.log('\n >> Smootie("Clássico", [+chocolate, -morango], MENU) \n ');
var menu = await Smootie("Clássico", ['+chocolate', '-morango'], MENU);
console.log(menu);

console.log("\n >> Smootie('Forest Berry', ['-framboesa', '-mirtilo', '-mel', '-gelo', '-iogurte'], MENU) \n");
menu = await Smootie("Forest Berry", ['-framboesa', '-mirtilo', '-mel', '-gelo', '-iogurte'], menu);
console.log(menu);

console.log(" \n >> Smootie('Forest Berry', '-framboesa', '-iogurte') \n");
menu = await Smootie("Forest Berry", '-framboesa', '-iogurte');
console.log(menu);