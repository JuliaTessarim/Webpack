import soma from './CALC.js';
import Heading from './COMPONENTS/HEADING.js';

console.log("Testando webpack");

soma(2,4);
soma(10,20);

//loaders
const heading = new Heading();

heading.create("Este titulo é dinâmico");
heading.create("Hot reload");