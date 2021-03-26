const str = 'Serx ou não ser, eisx a questão'
count = 0;
pos = str.indexOf("x"); // retorna 3

while ( pos != -1 ) {
   count++;
   console.log(pos)
   pos = str.indexOf( "x", pos + 1  );
}