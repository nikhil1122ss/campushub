import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: 'Scientific Calculator (Casio FX-991ES Plus)',
    category: 'Scientific Calculators',
    description: 'Premium Casio calculator with multi-replay function, ideal for engineering students.',
    brand: 'Casio',
    costPrice: 1200,
    sellingPrice: 1499,
    profitMargin: 299,
    quantity: 250,
    image: '/images/casio-fx991es.png'
  },
  {
    name: 'Engineering Starter Kit',
    category: 'Engineering Kits',
    description: 'Complete kit for your first semester with drawing tools, notebooks, and stationery.',
    brand: 'CampusHub',
    costPrice: 980,
    sellingPrice: 1299,
    profitMargin: 319,
    quantity: 180,
    image: '/images/engineering-starter-kit.png'
  },
  {
    name: 'Girls Hostel Essentials Kit',
    category: 'Girls Hostel Essentials',
    description: 'Daily essentials selected for girls hostel living, including hygiene and care items.',
    brand: 'CampusHub',
    costPrice: 320,
    sellingPrice: 449,
    profitMargin: 129,
    quantity: 210,
    image: '/images/girls-hostel-kit.png'
  },
  {
    name: 'Arduino Starter Board',
    category: 'Project Components',
    description: 'Arduino Uno compatible starter board for electronics and project work.',
    brand: 'Arduino',
    costPrice: 550,
    sellingPrice: 699,
    profitMargin: 149,
    quantity: 120,
    image: '/images/arduino-board.png'
  }
];

async function main() {
  await prisma.product.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.discount.deleteMany();
  await prisma.request.deleteMany();
  await prisma.referral.deleteMany();

  await prisma.product.createMany({ data: products });

  await prisma.discount.createMany({
    data: [
      { code: 'CAMPUS10', description: '10% off on first order', amount: 10, active: true },
      { code: 'HOSTEL20', description: '₹20 off on hostel essentials', amount: 20, active: true }
    ]
  });

  await prisma.request.createMany({
    data: [
      { title: 'Need a compact motor for robotics project', description: 'Looking for a low-RPM geared motor with torque specifications.' },
      { title: 'Special sensor module for weather station', description: 'Need DHT22 or BME280 with cables and mounting.' }
    ]
  });

  await prisma.referral.create({
    data: {
      code: 'CAMPUSHUB50',
      user: {
        create: {
          name: 'Seed Admin',
          email: 'admin@campushub.local'
        }
      },
      rewardPoints: 200
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
