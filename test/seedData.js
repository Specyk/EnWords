const Phrasal = require('../models/Phrasal')
const Word = require('../models/Word')

const words = [
    {
        pl: 'kłócić się, spierać',
        en: 'to quibble',
        definition: '[verb] - to argue or complain about something that is not important',
        example: "Let's not quibble over a couple of dollars."
    },
    {
        pl: 'obelga, upokarzająca uwaga',
        en: 'put-down',
        definition: '[noun] - an unkind remark that makes somebody seem silly',
        example: "She couldn't stand his put-downs any more."
    },
    {
        pl: 'niewola',
        en: 'captivity',
        definition: '[noun] - the situation in which a person or animal is kept somewhere and is not allowed to leave',
        example: 'All the hostages were released from captivity.'
    },
    {
        pl: 'niepokonany, niezwyciężony',
        en: 'unbeaten',
        definition: '[adjective] - (in sports) that has never been defeated in a competition',
        example: 'Chelsea London remain unbeaten this season so far.'
    },
    {
        pl: 'bez wdzięku',
        en: 'graceless',
        definition: '[adjective] - moving in an awkward way',
        example: 'His graceless dancing was painful to watch.'
    },
    {
        pl: 'podarować, ofiarować',
        en: 'to donate',
        definition: '[verb] - to give money, food, clothes, etc. to a person or organization, especially a charity',
        example: 'He donated most of his money to charity.'
    },
    {
        pl: 'skakać, podskakiwać',
        en: 'to hop',
        definition: '[verb] - to jump on one foot or to move about in this way',
        example: 'The kids were hopping over the large puddles.'
    },
    {
        pl: 'poirytowany, zdenerwowany',
        en: 'miffed',
        definition: "[adjective] - annoyed at someone's behaviour towards you",
        example: "She was miffed that we didn't take her with us."
    },
    {
        pl: 'niewykwalifikowany',
        en: 'unskilled',
        definition: '[adjective] - without special skills or qualifications',
        example: 'The income of skilled workers in Asia is much higher than that of low or unskilled workers.'
    },
    {
        pl: 'opuścić, pominąć',
        en: 'to skip',
        definition: '[verb] - to avoid doing or having something',
        example: 'Dave’s been skipping lessons all semester.'
    }
]

const phrasals = [
    {
        pl: 'ruszać, skręcać',
        en: 'pull out',
        example: 'A van suddenly pulled out in front of us.'
    },
    {
        pl: 'być przepełnionym',
        en: 'brim over',
        example: 'Susan was brimming over with excitement.'
    },
    {
        pl: 'trzymać kogoś w ryzach, zmuszać do posłuszeństwa',
        en: 'keep sb under',
        example: 'The people from the village are kept under by the army.'
    },
    {
        pl: 'tłoczyć się, kłębić się',
        en: 'mill around',
        example: 'Crowds of  students were milling around in the square.'
    },
    {
        pl: 'spłacać coś',
        en: 'pay down sth',
        example: 'She still has to pay down her student loan.'
    },
    {
        pl: 'dać się nabrać',
        en: 'fall for sth',
        example: 'She is too intelligent to fall for that trick.'
    },
    {
        pl: 'odrobić skutki czegoś, odkupić coś',
        en: 'live sth down',
        example: "If the team loses, they'll never live it down."
    },
    {
        pl: 'wepchnąć się, wcisnąć',
        en: 'cram into sth',
        example: "We all managed to cram into Judy's car yesterday."
    },
    {
        pl: 'wyżywać się na kimś',
        en: 'take it out on sb',
        example: "I know you're exhausted but you don't have to take it out on me."
    },
    {
        pl: 'zgadzać się, pokrywać się',
        en: 'tie in with',
        example: "His explanation doesn't tie in with what Dave told me."
    }
]

module.exports = {
    phrasals: async () => await Promise.all(phrasals.map(p => new Phrasal(p).save())),
    words: async () => await Promise.all(words.map(w => new Word(w).save()))
}
