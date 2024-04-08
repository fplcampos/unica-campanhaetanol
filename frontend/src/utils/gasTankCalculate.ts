export default async function GasTankCalculate(req:any){

    const gasTankQuantity = +req.gasTankQuantity
    const mediumFuelTank = 55.0

    const litersGasoline = mediumFuelTank * gasTankQuantity
    const litersEthanol = litersGasoline / 0.7

    const litersEthanolFormatted = +litersEthanol.toFixed(2)

    const carbonIntensityEthanol = 27.20
    const carbonIntensityGasoline = 75.14

    const energyContentEthanol = 21.34
    const energyContentGasoline = 29.62

    const ethanolEmission = (carbonIntensityEthanol * energyContentEthanol * litersEthanolFormatted) / 1000
    const ethanolEmissionFormatted = +ethanolEmission.toFixed(2)
    const annualEthanolEmission = ethanolEmissionFormatted * 12
    const annualEthanolEmissionFormatted = +annualEthanolEmission.toFixed(2)

    const gasolineEmission = (carbonIntensityGasoline * energyContentGasoline * litersGasoline) / 1000
    const gasolineEmissionFormatted = +gasolineEmission.toFixed(2)
    const annualGasolineEmission = gasolineEmissionFormatted * 12
    const annualGasolineEmissionFormatted = +annualGasolineEmission.toFixed(2)

    const avoidedEmisson = gasolineEmissionFormatted - ethanolEmissionFormatted
    const avoidedEmissonFormatted = +avoidedEmisson.toFixed(2)
    const annualAvoidedEmission = avoidedEmissonFormatted * 12
    const annualAvoidedEmissionFormatted = +annualAvoidedEmission.toFixed(2)

    const gasolineEmissionTon = gasolineEmissionFormatted / 1000
    const gasolineEmissionTonFormatted = +gasolineEmissionTon.toFixed(3)

    const results = [
        {
            ethanolEmission: ethanolEmissionFormatted,
            annualEthanolEmission: annualEthanolEmissionFormatted,
            gasolineEmission: gasolineEmissionFormatted,
            annualGasolineEmission: annualGasolineEmissionFormatted,
            avoidedEmisson: avoidedEmissonFormatted,
            annualAvoidedEmission: annualAvoidedEmissionFormatted,
            gasolineEmissionTon: gasolineEmissionTonFormatted
        },
        {
            status: 200
        }
    ]

    return results
}