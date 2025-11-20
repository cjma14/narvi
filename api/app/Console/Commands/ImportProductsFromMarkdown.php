<?php

namespace App\Console\Commands;

use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Console\Command;
use Symfony\Component\Yaml\Yaml;

class ImportProductsFromMarkdown extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'products:default';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Default products from Markdown files (ES and EN) into database';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $productsData = [
            [
                'title' => 'Jereh Coiled Tubing Trailer',
                'url_alias' => 'jereh-coiled-tubing-trailer',
                'description' => 'Aumenta la eficiencia de tus operaciones con esta Unidad de Enrollado de Tubería JEREH 2012. Su diseño robusto y versátil, junto con una capacidad de carga excepcional, la convierten en una herramienta indispensable para cualquier proyecto.',
                'primary_button_url' => '#',
                'primary_button_title' => 'Ver producto',
                'secondary_button_url' => '/es/contact',
                'secondary_button_title' => 'Contactar con ventas',
                'stock' => true,
                'specifications' => [
                    'Descripción Detallada de la Unidad: Unidad de Tubo Enrollado JEREH 2012 Fabricada, 15,000\' Tubo Enrollado de 2", Medidor de Hub – 829.8"',
                    'Cabeza Inyectora: Modelo ZRT-80K',
                    'Capacidad de Elevación Intermitente: 40,000 kg (90,000 lbs)',
                    'Capacidad de Elevación Continua: 36,000 kg (80,000 lbs)',
                    'Capacidad de Snubbing Continua: 18,000 kg (40,000 lbs)',
                    'Velocidad Máxima (Desplazamiento Mínimo): 58 m/min, (190 ft/min)',
                    'Velocidad Máxima (Desplazamiento Máximo): 30.5 m/min, (100 ft/min)',
                    'Tamaño del Tubo: 1-1/4" – 3-1/2"',
                    'Control Superior de Velocidad Baja: 0.06 m/min, (2.3 in/min)',
                    'Capacidad de Elevación a través del Marco Exterior: 43,000 kg, (95,000 lbs)',
                    'Bloques Intercambiables',
                    'Ensamblaje de Doble Paquete de Apagado',
                    'Cabina del Operador Cerrada de 8\'W x 10\'L con AC/Calefacción',
                    'Todo Fabricado sobre Plataforma de 4 Ejes',
                ],
                'images' => [
                    'products/jereh-coiled-tubing-trailer/1.jpg',
                    'products/jereh-coiled-tubing-trailer/2.jpg',
                    'products/jereh-coiled-tubing-trailer/3.jpg',
                    'products/jereh-coiled-tubing-trailer/4.jpg',
                    'products/jereh-coiled-tubing-trailer/5.jpg',
                ],
                'translations' => [
                    'en' => [
                        'title' => 'Jereh Coiled Tubing Trailer',
                        'url_alias' => 'jereh-coiled-tubing-trailer',
                        'description' => 'Increase the efficiency of your operations with this JEREH 2012 Pipe Coiling Unit. Its robust and versatile design, together with an exceptional load capacity, make it an indispensable tool for any project.',
                        'primary_button_title' => 'View product',
                        'secondary_button_title' => 'Contact sales',
                        'specifications' => [
                            'Unit Detailed Description: 2012 JEREH Trailer-Manufactured Coiled Tubing Unit 15,000\' 2" Coiled Tubing Hub Meter – 829.8"',
                            'Injector Head: Model ZRT-80K',
                            'Intermittent Lifting Capacity: 40,000 kg (90,000 lbs)',
                            'Continuous Lifting Capacity: 36,000 kg (80,000 lbs)',
                            'Continuous Snubbing Capacity: 18,000 kg (40,000 lbs)',
                            'Max. Speed (Min. Displacement): 58 m/min, (190 ft/min)',
                            'Max. Speed (Max. Displacement): 30.5 m/min, (100 ft/min)',
                            'Tubing Size: 1-1/4" – 3-1/2"',
                            'Superior Slow Speed Control: 0.06 m/min, (2.3 in/min)',
                            'Lifting Capacity through Outer Frame: 43,000 kg, (95,000 lbs)',
                            'Interchangeable Blocks',
                            'Dual Pack Off Assembly',
                            '8\'W x 10\'L Enclosed Operator\'s Cab w/AC/Heat',
                            'All Manufactured on 4-Axle Step Deck',
                        ],
                    ],
                ],
            ],
            [
                'title' => 'Cased Hole Logging Truck Kenworth T-300 / 2007',
                'url_alias' => 'truck-kenworth-t-300',
                'description' => 'Camión de Registro de Pozo Entubado Kenworth T-300 2007, 94,300 millas, 8,648 horas, Motor Diesel Cummins de 330 HP, Transmisión Eaton Fuller de 18 velocidades, capacidad de cableado de 25,000 pies, generador hidráulico y más.',
                'primary_button_url' => '#',
                'primary_button_title' => 'Ver producto',
                'secondary_button_url' => '/es/contact',
                'secondary_button_title' => 'Contactar con ventas',
                'stock' => true,
                'specifications' => [
                    'Medidor de Hub: 94,300 millas',
                    'Horómetro: 8,648 horas',
                    'Motor: Motor Diesel Cummins 330 HP',
                    'Transmisión Manual Eaton Fuller de 18 Velocidades, Base de Rueda de 299", Camarote Plano de 36", Suspensión Neumática',
                    'Suspensión, Malacate, Aire Acondicionado, Control de Crucero, Espejos Calefactables',
                    'Bastidor de Cableado Fabricado por ASEP',
                    'Peso Bruto 52,000 libras',
                    'Capacidad del Tambor TSplit para 25,000 pies de cable de alambre de 7/32" y 5/16"',
                    'Sistema de Registro de Datos de Cableado',
                    'Generador Hidráulico 30KW',
                    'Sistema inyector de grasa de bomba',
                    'Aire acondicionado HAVC',
                ],
                'images' => [
                    'products/truck-kenworth-t-300/1.jpg',
                    'products/truck-kenworth-t-300/2.jpg',
                    'products/truck-kenworth-t-300/3.jpg',
                    'products/truck-kenworth-t-300/4.jpg',
                    'products/truck-kenworth-t-300/5.jpg',
                ],
                'translations' => [
                    'en' => [
                        'title' => 'Cased Hole Logging Truck Kenworth T-300 / 2007',
                        'url_alias' => 'truck-kenworth-t-300',
                        'description' => '2007 Kenworth T-300 Cased Hole Logging Truck, 94,300 miles, 8,648 hours, Cummins 330 HP Diesel Engine, Eaton Fuller 18-speed transmission, 25,000 ft wireline capacity, hydraulic generator, and more.',
                        'primary_button_title' => 'View product',
                        'secondary_button_title' => 'Contact sales',
                        'specifications' => [
                            'Hub meter: 94,300 miles',
                            'Hourmeter: 8,648 hrs',
                            'Engine: Cummins Diesel Engine 330 HP',
                            'Eaton Fuller 18 Speed Manual Transmission, 299" Wheel Base, 36" Flat Top Sleeper, Air Ride',
                            'Suspension, Winch, Air Conditioning, Cruise Control, Heated Mirrors.',
                            'Wireline frame Manufactured by ASEP.',
                            'Gross Weight 52,000 pounds',
                            'TSplit Drum capacity for 25,000 feet 7/32" & 5/16" wire cable.',
                            'Wireline Datalog System',
                            'Hydraulic Generator 30KW',
                            'Pump Grease injector system',
                            'HAVC air condition',
                        ],
                    ],
                ],
            ],
            [
                'title' => 'Control Pressure Equimente package',
                'url_alias' => 'pressure-control-valve-bop',
                'description' => 'Control Pressure Equimente package (5-1/8", 10,000 PSI) de Lee Specialties, con rack haul, lubricantes, cruce, trampa de herramientas, atrapador de herramientas, sub de bombeo, válvula de tapón y módulo inyector de grasa.',
                'primary_button_url' => '#',
                'primary_button_title' => 'Ver producto',
                'secondary_button_url' => '/es/contact',
                'secondary_button_title' => 'Contactar con ventas',
                'stock' => true,
                'specifications' => [
                    'Medidor de Hub: 94,300 millas',
                    'Horómetro: 8,648 horas',
                    'Motor: Motor Diesel Cummins 330 HP',
                    'Transmisión Manual Eaton Fuller de 18 Velocidades, Base de Rueda de 299", Camarote Plano de 36", Suspensión Neumática',
                    'Suspensión, Malacate, Aire Acondicionado, Control de Crucero, Espejos Calefactables',
                    'Bastidor de Cableado Fabricado por ASEP',
                    'Peso Bruto 52,000 libras',
                    'Capacidad del Tambor TSplit para 25,000 pies de cable de alambre de 7/32" y 5/16"',
                    'Sistema de Registro de Datos de Cableado',
                    'Generador Hidráulico 30KW',
                    'Sistema inyector de grasa de bomba',
                    'Aire acondicionado HAVC',
                ],
                'images' => [
                    'products/pressure-control-valve-bop/1.png',
                    'products/pressure-control-valve-bop/2.jpg',
                    'products/pressure-control-valve-bop/3.jpg',
                    'products/pressure-control-valve-bop/4.jpg',
                    'products/pressure-control-valve-bop/5.jpg',
                ],
                'translations' => [
                    'en' => [
                        'title' => 'Control Pressure Equimente package',
                        'url_alias' => 'pressure-control-valve-bop',
                        'description' => 'Control Pressure Equimente package (5-1/8", 10,000 PSI) by Lee Specialties, featuring rack haul, lubricators, crossover, tool trap, tool catcher, pump-in sub, plug valve, and grease injector module.',
                        'primary_button_title' => 'View product',
                        'secondary_button_title' => 'Contact sales',
                        'specifications' => [
                            'Hub meter: 94,300 miles',
                            'Hourmeter: 8,648 hrs',
                            'Engine: Cummins Diesel Engine 330 HP',
                            'Eaton Fuller 18 Speed Manual Transmission, 299" Wheel Base, 36" Flat Top Sleeper, Air Ride',
                            'Suspension, Winch, Air Conditioning, Cruise Control, Heated Mirrors.',
                            'Wireline frame Manufactured by ASEP.',
                            'Gross Weight 52,000 pounds',
                            'TSplit Drum capacity for 25,000 feet 7/32" & 5/16" wire cable.',
                            'Wireline Datalog System',
                            'Hydraulic Generator 30KW',
                            'Pump Grease injector system',
                            'HAVC air condition',
                        ],
                    ],
                ],
            ],
            [
                'title' => 'MultiSplit Wireline Offshore Unit Zone 2',
                'url_alias' => 'multisplit-wireline-offshore',
                'description' => 'MultiSplit Wireline Offshore Unit Zone 2: Una solución versátil y potente de cableado para operaciones offshore. Con un diseño compacto, un sistema de accionamiento hidráulico de alto rendimiento y un control avanzado de profundidad y tensión, esta unidad es ideal para operaciones de pozo entubado.',
                'primary_button_url' => '#',
                'primary_button_title' => 'Ver producto',
                'secondary_button_url' => '/es/contact',
                'secondary_button_title' => 'Contactar con ventas',
                'stock' => true,
                'specifications' => [
                    'Módulo de Energía: (L) 1,36 m, 4,46 ft (W) 2,00 m, 6,56 ft (H) 2,70 m, 8,86 ft (Peso) 4,550 kg, 10,031 Ibs',
                    'Módulo de Cabina: (L) 3,00 m, 9,84 ft (W) 2,00 m, 6,56 ft (H) 3,18 m, 10,43 ft (Peso) 3,750 kg, 8,267 Ibs',
                    'Módulo de Malacate, Tambor Simple: (L) 2,01 m, 6,59 ft (W) 2,00 m, 6,56 ft (H) 2,65 m, 8,69 ft (Peso) 4,650 kg, 10,251 Ibs',
                    'Sistema hidráulico de circuito cerrado de 400 bar (5,800 psi)',
                    'Bomba hidráulica de desplazamiento variable y motor hidráulico',
                    'Capaz de aceleración rápida a velocidades extremadamente altas',
                    'Tanque hidráulico: 125 litros (33 galones US)',
                    'Freno dinámico hidráulico',
                    'Basado en 25.000 ft de cable de 5/16" en tambor BC08. Peso de la herramienta 1100 Ibs',
                    'Velocidad máxima de línea en el núcleo: 106 m/min, 347 ft/min',
                    'Velocidad máxima de línea en OD: 258 m/min, 864 ft/min',
                ],
                'images' => [
                    'products/multiSplit-wireline-offshore/1.png',
                    'products/multiSplit-wireline-offshore/2.jpg',
                    'products/multiSplit-wireline-offshore/3.jpg',
                    'products/multiSplit-wireline-offshore/4.jpg',
                    'products/multiSplit-wireline-offshore/5.jpg',
                ],
                'translations' => [
                    'en' => [
                        'title' => 'MultiSplit Wireline Offshore Unit Zone 2',
                        'url_alias' => 'multisplit-wireline-offshore',
                        'description' => 'MultiSplit Wireline Offshore Unit Zone 2: A versatile and powerful wireline solution for offshore operations. Featuring a compact design, high-performance hydraulic drive system, and advanced depth and tension control, this unit is ideal for cased hole operations.',
                        'primary_button_title' => 'View product',
                        'secondary_button_title' => 'Contact sales',
                        'specifications' => [
                            'Power Pack Module: (L) 1.36 m, 4.46 ft (W) 2.00 m, 6.56 ft (H) 2.70 m, 8.86 ft (Weight) 4,550 kg, 10,031 Ibs',
                            'Cabin Module: (L) 3.00 m, 9.84 ft (W) 2.00 m, 6.56 ft (H) 3.18 m, 10.43 ft (Weight) 3,750 kg, 8,267 Ibs',
                            'Winch Module, Single Drum: (L) 2.01 m, 6.59 ft (W) 2.00 m, 6.56 ft (H) 2.65 m, 8.69 ft (Weight) 4,650 kg, 10,251 Ibs',
                            '400 bar (5,800 psi) closed loop hydraulic system',
                            'Variable displacement hydraulic pump and hydraulic motor',
                            'Capable of fast acceleration at extremely high speeds',
                            'Hydraulic tank: 125 Litres (33 US Gallon)',
                            'Hydraulic dynamic braking',
                            'Based on 25.000 ft 5/16" wire on BC08 drum. Tool weight 1100 Ibs',
                            'Max. Line speed at core: 106 m/min, 347 ft/min',
                            'Max. Line speed at OD: 258 m/min, 864 ft/min',
                        ],
                    ],
                ],
            ],
            [
                'title' => '2013 Kenworth T800 6x4 Hot Oil Truck',
                'url_alias' => 'kenworth-t800',
                'description' => '2013 Kenworth T800 6x4 Hot Oil Truck, motor Cummins ISX15 de 450 HP, transmisión Eaton Fuller de 18 velocidades, 330,801 millas y 8,906 horas.',
                'primary_button_url' => '#',
                'primary_button_title' => 'Ver producto',
                'secondary_button_url' => '/es/contact',
                'secondary_button_title' => 'Contactar con ventas',
                'stock' => true,
                'specifications' => [
                    'Fabricante: Kenworth modelo T-800',
                    'Motor: Cummins ISX15 6 Cilindros 15 L Ultra Bajo Azufre Diesel',
                    'Potencia: 450 caballos de fuerza',
                    'Kilometraje: 330,801 millas',
                    'Horas de motor: 8,906 horas',
                    'Transmisión Manual Eaton Fuller de 18 Velocidades',
                    'Eje Delantero: 18,740 libras',
                    'Eje Trasero: 46,000 libras',
                    'Peso Bruto Vehicular (GVWR): 64,740 libras',
                ],
                'images' => [
                    'products/kenworth-t800/1.png',
                    'products/kenworth-t800/2.png',
                    'products/kenworth-t800/3.png',
                ],
                'translations' => [
                    'en' => [
                        'title' => '2013 Kenworth T800 6x4 Hot Oil Truck',
                        'url_alias' => 'kenworth-t800',
                        'description' => '2013 Kenworth T800 6x4 Hot Oil Truck, Cummins ISX15 450 HP engine, Eaton Fuller 18-speed transmission, 330,801 miles, and 8,906 hours.',
                        'primary_button_title' => 'View product',
                        'secondary_button_title' => 'Contact sales',
                        'specifications' => [
                            'Manufacturer: Kenworth model T-800 ',
                            'Engine: Cummins Engine ISX156 Cylinder 15 L Ultra LowSulfur Diesel ',
                            'Horse Power: 450hp',
                            'Mileage: 330 801mi',
                            'Hour meter: 8,906 hours',
                            'Eaton Fuller 18-Speed Manual Transmission',
                            'Front Axle: 18740 lbs',
                            'Rear Axle: 46000 lbs',
                            'GVWR 64740 Lbs',
                        ],
                    ],
                ],
            ],
            [
                'title' => '1995 Western Star Hot Oil Truck',
                'url_alias' => '1995-western-star-hot-oil',
                'description' => 'Camión Western Star 2004, motor Caterpillar de 350 HP, transmisión Eaton Fuller de 13 velocidades, 4,377 km y 2,536 horas de motor. Equipado con un tanque de acero de 9,450 L con 3 compartimentos, pasarela y bomba Gardner Denver.',
                'primary_button_url' => '#',
                'primary_button_title' => 'Ver producto',
                'secondary_button_url' => '/es/contact',
                'secondary_button_title' => 'Contactar con ventas',
                'stock' => true,
                'specifications' => [
                    'Fabricante: WESTERN STAR',
                    'Motor: Caterpillar 3406',
                    'Potencia: 350 caballos de fuerza',
                    'Kilometraje: 4,377 km',
                    'Horas de motor: 2536 horas',
                    'Transmisión: Eaton Fuller de 13 velocidades manual',
                    'Peso bruto vehicular (GVWR): 54,000 libras',
                    'Neumáticos delanteros: 385/65R22.5',
                    'Neumáticos traseros: 11R24.5',
                    'Equipo de lavado, tanques Hamm 2004 de 9450 L de acero con 3 compartimentos, pasarela, bomba Gardner Denver de triple émbolo, quemador de diésel',
                ],
                'images' => [
                    'products/1995-western-star-hot-oil/1.png',
                    'products/1995-western-star-hot-oil/2.jpg',
                    'products/1995-western-star-hot-oil/3.jpg',
                    'products/1995-western-star-hot-oil/4.jpg',
                    'products/1995-western-star-hot-oil/5.jpg',
                ],
                'translations' => [
                    'en' => [
                        'title' => '1995 Western Star Hot Oil Truck',
                        'url_alias' => '1995-western-star-hot-oil',
                        'description' => '2004 Western Star 350 HP Caterpillar Engine, Eaton Fuller 13-speed transmission, 4,377 km, and 2,536 engine hours. Equipped with a 9,450 L steel tank with 3 compartments, catwalk, and Gardner Denver pump.',
                        'primary_button_title' => 'View product',
                        'secondary_button_title' => 'Contact sales',
                        'specifications' => [
                            'Manufacturer: WESTERN STAR',
                            'Engine: 3406 Caterpilar',
                            'Horse Power : 350hp',
                            'Mileage: 4,377km',
                            'Hour meter: 2536 Engine hrs',
                            'Transmission:  Eaton Fuller 13-Speed Manual Transmission',
                            'GVWR: 54,000 lbs',
                            'Front Tire: 385/65R22.5',
                            'Rear Tires: 11R24.5',
                            'Wet Kit, 2004 Hamm Tanks 9450 L Steel Tank 3 Compartments Catwalk, Gardner Denver Triplex Pump, Diesel Fired Burner',
                        ],
                    ],
                ],
            ],
            [
                'title' => '2003 MACK CVS713 HOT OILER TRUCK',
                'url_alias' => '2003-mack-cvs713-hot-oiler',
                'description' => 'VENDIDO - Con 265,609 millas, transmisión Maxitorque de 10 velocidades, motor Detroit Diesel Serie 60, tanque de fluido con calentamiento rápido de 80 barriles de capacidad, y bomba Gardner Denver TEE de triple émbolo.',
                'primary_button_url' => '#',
                'primary_button_title' => 'Ver producto',
                'secondary_button_url' => '/es/contact',
                'secondary_button_title' => 'Contactar con ventas',
                'stock' => false,
                'specifications' => [
                    'Kilometraje: 265,609 millas',
                    'Transmisión: Maxitorque de 10 velocidades',
                    'Motor: Detroit Diesel Serie 60',
                    'Calentador de aceite: Calentamiento rápido',
                    'Tanque de fluido: 80 barriles',
                    'Bomba de triple émbolo: Gardner Denver TEE',
                ],
                'images' => [
                    'products/2003-mack-cvs713-hot-oiler/1.jpeg',
                    'products/2003-mack-cvs713-hot-oiler/2.jpeg',
                    'products/2003-mack-cvs713-hot-oiler/3.jpeg',
                ],
                'translations' => [
                    'en' => [
                        'title' => '2003 MACK CVS713 HOT OILER TRUCK',
                        'url_alias' => '2003-mack-cvs713-hot-oiler',
                        'description' => 'SOLD - 2003 Mack CVS713 Hot Oil Truck, 265,609 miles, Maxitorque 10-speed transmission, Detroit Diesel Series 60 engine, Rush-fired fluid tank with 80-barrel capacity, and Gardner Denver TEE triplex pump.',
                        'primary_button_title' => 'View product',
                        'secondary_button_title' => 'Contact sales',
                        'specifications' => [
                            'Mileage: 265609 miles',
                            'Transmission: Maxitorque 10 Speeds',
                            'Engine: Detroit Diesel Serie 60',
                            'Hot Oiler: Rush fired',
                            'Fluid Tank: 80bbl',
                            'Triplex Pump: Gardner Denver TEE',
                        ],
                    ],
                ],
            ],
            [
                'title' => '2011 Peterbilt 367 T/A Wireline Truck',
                'url_alias' => '2011-peterbilt-367',
                'description' => 'Este 2011 Peterbilt 367 Wireline Truck, equipado con una unidad Synergy Manufacturing Wireline, está diseñado para manejar operaciones de cable exigentes con precisión y eficiencia.',
                'primary_button_url' => '#',
                'primary_button_title' => 'Ver producto',
                'secondary_button_url' => '/es/contact',
                'secondary_button_title' => 'Contactar con ventas',
                'stock' => true,
                'specifications' => [
                    'Motor: C13 Caterpillar',
                    'Transmisión: transmisión manual Eaton Fuller de 18 velocidades',
                    'Capacidad de cable: 28,790 pies de cable E-line de 5/16"',
                    'Freno de tambor: freno de disco de tambor simple',
                    'Panel de tiro: panel de tiro Warrior 8',
                    'Sistema de sonda: sistema de sonda Benchmark AM3K',
                    'Generador: generador Marathon de 30 kW',
                ],
                'images' => [
                    'products/2011-peterbilt-367/1.png',
                    'products/2011-peterbilt-367/2.png',
                    'products/2011-peterbilt-367/3.png',
                    'products/2011-peterbilt-367/4.png',
                    'products/2011-peterbilt-367/5.png',
                ],
                'translations' => [
                    'en' => [
                        'title' => '2011 Peterbilt 367 T/A Wireline Truck',
                        'url_alias' => '2011-peterbilt-367',
                        'description' => 'This 2011 Peterbilt 367 Wireline Truck, equipped with a Synergy Manufacturing Wireline unit, is designed to handle demanding wireline operations with precision and efficiency.',
                        'primary_button_title' => 'View product',
                        'secondary_button_title' => 'Contact sales',
                        'specifications' => [
                            'Engine: C13 Caterpillar',
                            'Transmission: Eaton Fuller 18-speed manual transmission',
                            'Wireline Capacity: 28,790 ft of 5/16" E-line cable',
                            'Drum Brake: Single Drum Disk brake',
                            'Shooting Panel: Warrior 8 Shooting Panel',
                            'Probe System: Benchmark AM3K Probe System',
                            'Generator: Marathon 30kW Generator',
                        ],
                    ],
                ],
            ],
            [
                'title' => 'TULSA TRIPLEX TT-560 TRIPLEX PUMP UNIT',
                'url_alias' => 'tulsa-triplex-tt-560-pump',
                'description' => 'TULSA TRIPLEX TT-560 TRIPLEX PUMP UNIT: Una solución de bombeo potente y versátil para aplicaciones exigentes. Con una carrera de 6" y una capacidad de hasta 612 GPM, esta unidad es ideal para pruebas de presión, inyección de agua química, perforación y aplicaciones industriales.',
                'primary_button_url' => '#',
                'primary_button_title' => 'Ver producto',
                'secondary_button_url' => '/es/contact',
                'secondary_button_title' => 'Contactar con ventas',
                'stock' => true,
                'specifications' => [
                    'Carrera de 6"',
                    'Capacidad Continua de 500 GPM',
                    'Volumen de Bombeo Máximo de 612 GPM',
                    'Pruebas de Presión',
                    'Inyección de Agua Química',
                    'Todas las Aplicaciones de Perforación',
                    'Aplicaciones Industriales',
                    'Servicios de Pozos',
                ],
                'images' => [
                    'products/tulsa-triplex-tt-560-pump/1.jpeg',
                    'products/tulsa-triplex-tt-560-pump/2.jpeg',
                    'products/tulsa-triplex-tt-560-pump/3.jpeg',
                    'products/tulsa-triplex-tt-560-pump/4.jpeg',
                    'products/tulsa-triplex-tt-560-pump/5.jpeg',
                ],
                'translations' => [
                    'en' => [
                        'title' => 'TULSA TRIPLEX TT-560 TRIPLEX PUMP UNIT',
                        'url_alias' => 'tulsa-triplex-tt-560-pump',
                        'description' => 'TULSA TT-560 Triplex Pump Unit: A powerful and versatile pumping solution for demanding applications. With a 6" stroke and a capacity of up to 612 GPM, this unit is ideal for pressure testing, chemical water injection, drilling, and industrial applications.',
                        'primary_button_title' => 'View product',
                        'secondary_button_title' => 'Contact sales',
                        'specifications' => [
                            '6" Stroke',
                            '500 GPM Continuous Duty Rated',
                            '612 GPM Max Pumping Volume',
                            'Pressure Testing',
                            'Chemical Water Injection',
                            'All Drilling Applications',
                            'Industrial Applications',
                            'Well Servicing',
                        ],
                    ],
                ],
            ],
            [
                'title' => 'GARDNER DENVER TEE PUMP UNIT',
                'url_alias' => 'gardner-denver-tee-pump',
                'description' => 'Esta unidad de bomba TEE de Gardner Denver es una solución potente y confiable para una variedad de aplicaciones. Su diseño triple garantiza un funcionamiento suave y un rendimiento duradero.',
                'primary_button_url' => '#',
                'primary_button_title' => 'Ver producto',
                'secondary_button_url' => '/es/contact',
                'secondary_button_title' => 'Contactar con ventas',
                'stock' => true,
                'specifications' => [
                    'Engine - Caterpiler C7 225 Hp',
                    'Transmision - Fuller 5 Speeds Std',
                    'Brake Hydraulic Horse Power - 165 Bhp',
                    'Weight - 44,000 Lbs',
                    'High Pressure - 10,000 Psi',
                    'Rate - 245 Gpm',
                ],
                'images' => [
                    'products/gardner-denver-tee-pump/1.jpeg',
                    'products/gardner-denver-tee-pump/2.jpeg',
                    'products/gardner-denver-tee-pump/3.jpeg',
                    'products/gardner-denver-tee-pump/4.jpeg',
                    'products/gardner-denver-tee-pump/5.jpeg',
                ],
                'translations' => [
                    'en' => [
                        'title' => 'GARDNER DENVER TEE PUMP UNIT',
                        'url_alias' => 'gardner-denver-tee-pump',
                        'description' => 'This Gardner Denver TEE Pump Unit is a powerful and reliable solution for a variety of applications. Its triplex design ensures smooth operation and long-lasting performance.',
                        'primary_button_title' => 'View product',
                        'secondary_button_title' => 'Contact sales',
                        'specifications' => [
                            'Engine - Caterpiler C7 225 Hp',
                            'Transmision - Fuller 5 Speeds Std',
                            'Brake Hydraulic Horse Power - 165 Bhp',
                            'Weight - 44,000 Lbs',
                            'High Pressure - 10,000 Psi',
                            'Rate - 245 Gpm',
                        ],
                    ],
                ],
            ],
        ];

        $this->info('🚀 Iniciando importación de productos...');
        $this->newLine();

        $successCount = 0;
        $errorCount = 0;

        foreach ($productsData as $index => $productData) {
            try {
                $this->info("📦 Procesando producto " . ($index + 1) . ": {$productData['title']}");

                // Extraer imágenes y traducciones del array
                $images = $productData['images'] ?? [];
                $translations = $productData['translations'] ?? [];
                unset($productData['images'], $productData['translations']);

                // Crear el producto con los datos en español (por defecto)
                $product = Product::create($productData);

                // Guardar las traducciones
                if (!empty($translations)) {
                    foreach ($translations as $langCode => $fields) {
                        foreach ($fields as $field => $value) {
                            $product->saveTranslation($field, $value, $langCode);
                        }
                    }
                    $this->info("   🌍 Traducciones guardadas para idioma: {$langCode}");
                }

                // Guardar las imágenes
                if (!empty($images)) {
                    foreach ($images as $order => $imagePath) {
                        ProductImage::create([
                            'product_id' => $product->id,
                            'path' => $imagePath,
                            'order' => $order + 1,
                        ]);
                    }
                    $this->info("   🖼️  " . count($images) . " imágenes asociadas");
                }

                $this->info("   ✅ Producto creado exitosamente (ID: {$product->id})");
                $successCount++;

            } catch (\Exception $e) {
                $this->error("   ❌ Error al crear producto: " . $e->getMessage());
                $errorCount++;
            }

            $this->newLine();
        }

        // Resumen final
        $this->newLine();
        $this->info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
        $this->info("✨ Importación completada");
        $this->info("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        $this->info("✅ Productos creados exitosamente: {$successCount}");
        if ($errorCount > 0) {
            $this->error("❌ Productos con errores: {$errorCount}");
        }
        $this->info('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

        return $successCount > 0 ? 0 : 1;
    }

}
