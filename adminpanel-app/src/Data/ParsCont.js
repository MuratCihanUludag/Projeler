export const Makineler = [
  {
    id: 0,
    name: "Makine1",
    active: true,
    ExtruderA: [
      {
        name: "MAK",
        id: 1,
        aktifVerim: 21,
        targetVerim: 2123,
      },
    ],
    urunler: [
      { id: 0, name: "BAL PIYASA", price: 15 },
      { id: 1, name: "GAZ ALICI NHT", price: 30 },
      { id: 2, name: "BAL MTR", price: 2 },
      { id: 3, name: "KALSIT YBS", price: 22 },
      {
        id: 4,
        name: "Makina1",
        price: 0,
      },
    ],
  },
  {
    id: 1,
    name: "Makine2",
    active: false,
    ExtruderA: [
      {
        name: "MAK",
        id: 1,
        aktifVerim: 21,
        targetVerim: 2123,
      },
    ],
    urunler: [
      { id: 0, name: "BAL PIYASA", price: 44 },
      { id: 1, name: "GAZ ALICI NHT", price: 12 },
      { id: 2, name: "BAL MTR", price: 33 },
      { id: 3, name: "KALSIT YBS", price: 17 },
      {
        id: 4,
        name: "Makina1",
        price: 0,
      },
    ],
  },
];

export const Parsconnectapi = [
  {
    id: 0,
    targetCapacity: 1000,
    activeCapacity: 500,
    targetGrammage: 2000,
    activeGrammage: 2000,
    targetThickness: 18,
    activeThickness: 22,
    targetLineSpeed: 60,
    activeLineSpeed: 90,
    filmWith: 1000,
    time: "0001-01-01T00:00:00",
    extruders: [
      {
        id: 0,
        no: 0,
        targetCapacity: 580,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 38,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 0,
            no: 0,
            name: "A1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 14,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 0,
            no: 1,
            name: "A2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 33,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 0,
            no: 2,
            name: "A3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 22,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 0,
            no: 3,
            name: "A4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 124,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 0,
            no: 4,
            name: "A5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 545,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 0,
            no: 5,
            name: "A6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 23,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 1,
        targetCapacity: 150,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 15,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 1,
            no: 0,
            name: "B1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 222,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 1,
            no: 1,
            name: "B2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 161,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 1,
            no: 2,
            name: "B3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 232,
            specificWeight: 0,
            cost: 16,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 1,
            no: 3,
            name: "B4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 76,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 1,
            no: 4,
            name: "B5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 567,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 1,
            no: 5,
            name: "B6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 456,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 2,
        targetCapacity: 130,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 13,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 2,
            no: 0,
            name: "C1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 2,
            no: 1,
            name: "C2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 2,
            no: 2,
            name: "C3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 2,
            no: 3,
            name: "C4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 2,
            no: 4,
            name: "C5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 2,
            no: 5,
            name: "C6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 3,
        targetCapacity: 120,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 12,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 3,
            no: 0,
            name: "D1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 3,
            no: 1,
            name: "D2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 3,
            no: 2,
            name: "D3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 3,
            no: 3,
            name: "D4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 3,
            no: 4,
            name: "D5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 3,
            no: 5,
            name: "D6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 4,
        targetCapacity: 100,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 10,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 4,
            no: 0,
            name: "E1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 4,
            no: 1,
            name: "E2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 4,
            no: 2,
            name: "E3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 4,
            no: 3,
            name: "E4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 4,
            no: 4,
            name: "E5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 4,
            no: 5,
            name: "E6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 5,
        targetCapacity: 70,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 7,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 5,
            no: 0,
            name: "F1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 5,
            no: 1,
            name: "F2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 5,
            no: 2,
            name: "F3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 5,
            no: 3,
            name: "F4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 5,
            no: 4,
            name: "F5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 5,
            no: 5,
            name: "F6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 6,
        targetCapacity: 50,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 5,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 6,
            no: 0,
            name: "G1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 6,
            no: 1,
            name: "G2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 6,
            no: 2,
            name: "G3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 6,
            no: 3,
            name: "G4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 6,
            no: 4,
            name: "G5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 6,
            no: 5,
            name: "G6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
    ],
  },
  {
    id: 1,
    targetCapacity: 1000,
    activeCapacity: 300,
    targetGrammage: 2000,
    activeGrammage: 1000,
    targetThickness: 18,
    activeThickness: 18,
    targetLineSpeed: 60,
    activeLineSpeed: 70,
    filmWith: 1000,
    time: "0001-01-01T00:00:00",
    extruders: [
      {
        id: 0,
        no: 0,
        targetCapacity: 380,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 38,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 0,
            no: 0,
            name: "A1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 0,
            no: 1,
            name: "A2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 0,
            no: 2,
            name: "A3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 0,
            no: 3,
            name: "A4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 0,
            no: 4,
            name: "A5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 0,
            no: 5,
            name: "A6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 1,
        targetCapacity: 150,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 15,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 1,
            no: 0,
            name: "B1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 1,
            no: 1,
            name: "B2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 1,
            no: 2,
            name: "B3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 1,
            no: 3,
            name: "B4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 1,
            no: 4,
            name: "B5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 1,
            no: 5,
            name: "B6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 2,
        targetCapacity: 130,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 13,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 2,
            no: 0,
            name: "C1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 2,
            no: 1,
            name: "C2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 2,
            no: 2,
            name: "C3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 2,
            no: 3,
            name: "C4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 2,
            no: 4,
            name: "C5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 2,
            no: 5,
            name: "C6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 3,
        targetCapacity: 120,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 12,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 3,
            no: 0,
            name: "D1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 3,
            no: 1,
            name: "D2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 3,
            no: 2,
            name: "D3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 3,
            no: 3,
            name: "D4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 3,
            no: 4,
            name: "D5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 3,
            no: 5,
            name: "D6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 4,
        targetCapacity: 100,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 10,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 4,
            no: 0,
            name: "E1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 4,
            no: 1,
            name: "E2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 4,
            no: 2,
            name: "E3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 4,
            no: 3,
            name: "E4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 4,
            no: 4,
            name: "E5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 4,
            no: 5,
            name: "E6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 5,
        targetCapacity: 70,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 7,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 5,
            no: 0,
            name: "F1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 5,
            no: 1,
            name: "F2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 5,
            no: 2,
            name: "F3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 5,
            no: 3,
            name: "F4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 5,
            no: 4,
            name: "F5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 5,
            no: 5,
            name: "F6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
      {
        id: 0,
        no: 6,
        targetCapacity: 50,
        activeCapacity: 0,
        targetThickness: 0,
        activeThickness: 0,
        targetRatio: 5,
        activeRatio: 0,
        rawMaterrials: [
          {
            id: 0,
            extruderNo: 6,
            no: 0,
            name: "G1",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 100,
            specificWeight: 2500,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 6,
            no: 1,
            name: "G2",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 6,
            no: 2,
            name: "G3",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 6,
            no: 3,
            name: "G4",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 6,
            no: 4,
            name: "G5",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
          {
            id: 0,
            extruderNo: 6,
            no: 5,
            name: "G6",
            totalConsumption: 0,
            instantConsumption: 0,
            ratio: 0,
            specificWeight: 0,
            cost: 0,
            consumptionCost: 0,
            currencyUnit: 0,
          },
        ],
      },
    ],
  },
];
