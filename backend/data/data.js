const data = [
    {
        id: 1,
        serbian: 'srecan',
        english: 'happy',
        picture: 'https://s3-alpha-sig.figma.com/img/2983/484c/02f1f51da2aaae1b0f190e4b632adfa8?Expires=1673222400&Signature=o3L2Aqp~AqI2trr7dhs9EusB19g4VSr2zulK1ThJfOpG2utJJthKZkNKxJlL6C1NitK5S0eKJm8ACl3g2-F4PPEnL9D7HH-LUOQMPAve2fWssVauUdNPAFE8ZD4VxMfx8CtlozWA6lP0mHeTpD7-Z3H9LYEG2PNC9H8M~yov1ZBIMDlEYDNpUkecohamYsqmojeww7eg8uVHC8DwS33GmTp~JlrT6KG4vT3YCCcB8tcnuQW8LnwC9h4-bTQaY6~JFrWIREe8~Y~vU-qMvIymsfeHodLCEj6TEKcym00Q~KmuroTkvhQxRkz3KGmwPhl1kHRT5z4UcLVMm8XcVc9ozA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
        id: 2,
        serbian: 'lijepo',
        english: 'nice',
        picture: 'https://s3-alpha-sig.figma.com/img/63bc/75b3/8447a61b88ed25bd53aa7c14faeb3d2e?Expires=1673222400&Signature=UIQfdLcD1Jjd1fjH3DDJz9vMFqWcNSa716Dz3r0LkWSqTqDthAI0N97MIDPxM4L4u7aPKOJdwUK2jFdW9bQF78s9CtCUb0B3Q96QX8SjAy1QN~h9WBcU36ZNRCotfSYhn9e-pfzUBkEUW0oShd7B13I2NisUVWM16wC55t8OxdsPn-Qf-B4zCFEOYF0wYM3rPu4u9H4u-lgu59w3eb-1ugevVIJUfqSWkheNiqSNl3dAet02~-qXRe-aMLgLJPygKRAhGJUEQS9vZflstp2SgYR4qPUfZDLYGGt5S~iQiH0zcVrbjt8IXARvIP766ldlC1t3sRCYyo65tfdSZEceng__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    }
    ,
    {
        id: 3,
        serbian: 'prijatelj',
        english: 'friend',
        picture: 'https://s3-alpha-sig.figma.com/img/df74/0864/b039d5e3bc983722eb3c24062883dba7?Expires=1673222400&Signature=F4FL9Padd1SWtjE2BJJV5kvlH6l9cVvYr46H-ISxn98XGn7ndrQQDcAYVNPcFQq~zSNzgFVW5NsmnwFrqT7hSoyj~zs-3ryR1aKs3RUW2sxOHInHoK7~kvgNZ-l8LHdmjLhk9vUgkQlmjEImZQOrk2ZL~HK1~n3HZ-bvGptKzHpgOtwsylvHt0fmsVK0ZkGSKuMe6P9UYX56scJwWLZFuoxKjmGY6SuhIC5r8SY3xgjGqdN8LMid1GS7nIAAGMYmHyZsRMJ9wUqzb0Z-nP~qySXC88SzSAfZUxeEiZYGUlHM1lccSrXLhf46Bb6uoFpqGlZs-njH7GXNOxGeTGd7aQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
        id: 4,
        serbian: 'eksplozija',
        english: 'explosion',
        picture: 'https://s3-alpha-sig.figma.com/img/25cb/0b30/9e70d171faf4dd65df375f6965a014e8?Expires=1673222400&Signature=OnYIGLYD-m1DjU1l-7s-RokpGa6M39HD6f5qdHg~6rmn6oIhlf5ZsNZxHfOOJjN7JhrkKvvvImPG7InWNHYE0fYwqJuX3h20p2kfpNS8CKaIuq5lxqu1d5eZhDqcZ2ObHKsHTMKT1KcAkjdwkHM1H2VtYvBpe7vpqJmRQKDZWpX-3qdIrny4eUHA5hSknCkxJSNGTUbC5xyBpFXxdt~opCHasT6xJ0lAjM00cUgEtoSKVqWFD0CaDB0eT7O9b13aGT36kduIPSGAnyYLb9HKKBO9xoX7YGutRDp7WQqhOE4R7HL8YR~Uk9UE6eh-UrSKHT7nSi8naGzSuwYioGpxXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
        id: 5,
        serbian: 'saragrepa',
        english: 'carrot',
        picture: 'https://s3-alpha-sig.figma.com/img/c09f/748d/268d99ea6c0977fbecd771db9f691c3e?Expires=1673222400&Signature=LrN9Mo27PodwthvUaIiSvPwVhlKFR5ewR6mTFdCo4JxTporlHru8mtakc2L7yn4PPKnQWMe3fD4vRqIMyg9IMWaALawkgSR1gt5CmxdeZjlKvzIWj9zCoRI50gMBiOM~iIUMsQangpTgBiQSTnfbBUn-Da2Gv~RFQnDUr44BL1xK5g-d9jWWSCXimgbtB-cIQKePmz0TlZ0Vu2J9tvADEyQo6GqjXu-VNU5Soo0xMCUlscaIRhp2R7dKFxtFu-VuDmt1d9CP1ZVqs~CdnbKo3m9rQX7RPpr5g47w0tW69pWmFCU9Jkmx0HVhIX~gC8-NlBdetT9F0MvJ6ABzTvkQ7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
        id: 6,
        serbian:'auto',
        english: 'car',
        picture: 'https://s3-alpha-sig.figma.com/img/8e18/9198/b596ec8aaf473f1bb3851e23f55a92f0?Expires=1673222400&Signature=f6HUWYWJEcMI~CZjPcgSGiSzTwuml~-nphc~pZrYCONEI58Iv5otV2Q86K~idA86qcR7P87ugrV8fitGU9ML9N1BpCDdvCkP2mStXjlOrOaqLcdj1KBRvBXrKL2Sib-iIUm6oPhbVlNlrafQwhLVV61ZnfCiMk0-D1xJktJrHCtLwqkn5BRhydN90~1M4oXlBOoNQS6VdGbnbxgVFKAZ7kllINP5RXVlqFz1r~DADFK06Fa6bfDWlww69jJ1BggGzNFRpi5hhQ~vDt4-3FV4bWYz-FMOD-x1rccDk6BAnR8ZIrDpySbQS7E4Vbd6M1L24yFCWrAgMHdB6~joX-8mZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
        id: 7,
        serbian:'vojnik',
        english: 'soldier',
        picture: 'https://s3-alpha-sig.figma.com/img/e6c4/e378/dda598c32858068ec7cebc8c26f9df6c?Expires=1673222400&Signature=aT-SebWV1FuyusXI~11uSj05Lf0oT3oY-TmBg1tHGhqo2KpgvZBolde0isWxFALd8ZCjBQ0xLx3Z6uyyh46F52hlGeF39VNLGWOTvMhugwyQsgBdLcfB5d~-Bj4p6DQ8Vki8UfeReNWtOnl2AAUNRTLTpTvDFVI0GGwwR3leQBIrKwdVcYgn5ojpZEFAfDZtmmf3HQhsyey~psdRVuWT00paOImJ1yK~Dt-BK~6MI~~BOXGaC8pvOb-Z9tst5ANrHTeFBNm4X5FUQg9tZRfLgeW4C1BO9D4BDZLTo3BafA3Yh~ZxnnWeZeyYqLQnlQ0uD-TLJRFcrACmxQJAQE6gQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
        id: 8,
        serbian:'strah',
        english: 'fear',
        picture: 'https://s3-alpha-sig.figma.com/img/423f/b29d/f9abc1016fe45822c7a14f624eafd6c2?Expires=1673222400&Signature=WNa6dP3oyB~hCa7yCAjhxCQDrLhVOxm3vBH6djSYpR3d1JzUZSlUG61WHNt2KXTRoV5tvSa0qtve4byhU0P7QIgYs7u1htCdxw5DdMZfSSAI1kCkixDelQP09RUpIKJx7oKerm9KWCGHyuvVHi3pjy4x37WF7OH4Q51cJ5ghTd4xhKQMyMAGdv1CWhufP4dZY8po-Tw3wU7OIy0DH2bXVCNyHp-2Vgmvi33LM-~4LBuSbKGEbkQ-a32pygVLS4-ViiDq3Cgo3gnFsbv2PFAxGo0xnnU9swUO7bucwFGF-jHdSH0dZ1VOTKRRUkgbyGUPradKy7om99TmzYcgIsUqCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
        id: 9,
        serbian:'relativnost',
        english: 'relativity',
        picture: 'https://s3-alpha-sig.figma.com/img/a617/2683/e30b1f7879b08f994fbcda8a22d172f4?Expires=1673222400&Signature=Loyndmnewlj4TNDaxBHTDr5c570HccFQdZumGedYYMPvzff-RNazZ66xK9VBzrCCXPOl4vz033DiLR85OTZX20pNZWysSLW98tqhRLdRZOSTRdmw4GUlM53xBRXmlzcLNbWoeA32cMZ6b6ZWBuACdGY7a3QXx1vr7UniPRu1sBY0vSdSdE-bnEsmy~8wjUDJlzShb75Fy8osF7Si~KGXMY8zaBCitP~1i1X-fPSiT10vNraUgP5ns9KNZRIrq4OxodSPqdZ3QFOedgpo3e8Q4pdPuriQvZITtgSXRIwmGVxHzED3UJWUlElwDMn~gzx6-e-L0tD5PAkCPMG1D-TeJA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },  
    {
        id: 10,
        serbian:'knjiga',
        english: 'book',
        picture: 'https://s3-alpha-sig.figma.com/img/635e/24c0/f44761170f05f7b8cec0c164ffe3f7ab?Expires=1673222400&Signature=d5eoNS5R7vlQ1l8MdzNzW-HdhU6WJhAGPHXPLQPXXDXjg0u0K-FhP6LtXP6Vi55jMmkMFI2OidtFioObBdZTwg1JW6fTMA5hlT3Y40~EwrY30NwR61t~yCSDQEoZetDaIVIstUFy5hp-Py3qVdREPaf25cFXVehzJvCPSVvV6ucp1vIUqxoPj0S1k~VbRwjfJaarecwjwDq01RxLpPZb701jU0MeJwqMZw3Pp9NNESQ~AY2OF6FApkJUyH-6OCPg48oKFuPJ~jz8MxGAUsnGJxuhpPJES7YZ3OS1QqMWQYi2VDT-g5WXo4xJIhNkCEny~xp9QK9KwJUf~t9iWTTT3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
        id: 11,
        serbian:'zemlja',
        english: 'earth',
        picture: 'https://s3-alpha-sig.figma.com/img/9b88/f050/d77f5b07ac36cc4e4d17fb5f31806f2c?Expires=1673222400&Signature=MxOxc-THDXgYCpYIU-kpIJeHa1KURUl0BLlVKhCxha-kJL0XpD1X9HiXVQv7o37AV1FHynPi45ggBqDu0PT49rcQgyKU4P~RkkpljdRCECfe68TdzxJoys7baVtuxSIwHEKjyCwyVMp-GnhS8pu3dCtWt76-lCM7-ZuX4Cima1znotgrtzsTmO3VRl-pZrXgBXqnsvU5HfceCarrDVFkl4xzsthRCQSs2l651g83OMbXXSPnzSLJdmonMnj~ONJUwDmyTB9izxenjZwSNEUoVnZ~eBREK5COLz5BWH9e6D-aLFrlox2mM~rT5EAKK1pZzjWkiCSsGy1z7mLXu24~ew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    },
    {
        id: 12,
        serbian:'ogranicenje brzine',
        english: 'speed limit',
        picture: 'https://s3-alpha-sig.figma.com/img/abad/8b66/af5c7ba0826d7cceb5d5b6782349fa7c?Expires=1673222400&Signature=ArFycnqjF2DZ7aNMIRtaPaMtz~n-XjpYuy~L2vxlXqP3ftR4VkrMfAz5cT3axFm09GecWrF17PzpD1drviGaucgrQ9zROc7r4h-wmMTMl0XQLSiazlnmfLTLS~g~ZakNm4mijwGrvJBv11lwPahmrYV6Ga6NE-Ps9t8TuBQ1FEefxFQ1ucPYJpXTrouvYk~-91f1kh~ZnK7IxUoVSX3RptT33aVFAyG5YSgmy4AqjbbuG5vg2y0eGc-VIpX449-BDamquSv0ISWS2opL4JxVN3oBbXomrbBuOHAtGa1Z8kW1iGbmSzX2PBXj6EbTtVsKz3VV-CLb7Ln6JZPYuqJMeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
    }  
]

module.exports = data;