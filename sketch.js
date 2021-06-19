const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var iron,rubber,hammer
var sand1,sand2,sand3,sand4,sand5,sand6;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber=new rubber(900,450,70)
    iron=new Iron(300,350)
    stone=new Stone(700,320,100,100)

    sand1=new sand(505,450,10)
    sand2=new sand(510,450,10)
    sand3=new sand(515,450,10)
    sand4=new sand(520,450,10)
    sand5=new sand(525,450,10)
    sand6=new sand(515,450,10)
    sand7=new sand(520,450,10)
    sand8=new sand(525,450,10)
    sand9=new sand(530,450,10)
    sand10=new sand(535,450,10)

}
function draw(){
    background("lightBlue");
    Engine.update(engine);

    Stone.display()
    plane.display();
    hammer.display();
    iron.display()
    rubber.display()


    sand1.display()
    sand2.display()
    sand3.display()
    sand4.display()
    sand5.display()
    sand6.display()
    sand7.display()
    sand8.display()
    sand9.display()
    sand10.display()
    
 
}