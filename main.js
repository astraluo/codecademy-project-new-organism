
// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
// Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }

// factory function to make new P.Aequor seq
  const pAequorFactory = (specimenNum, dna) => {
    return {
  
      specimenNum, 
      dna,
  
      mutate () {
        const dnaBases = ['A', 'T', 'C', 'G']
        let target = Math.floor(Math.random() * this.dna.length);
        dnaBases.splice(dnaBases.indexOf(this.dna[target]), 1);
        let snp = dnaBases[Math.floor(Math.random() * 3)]; 
        this.dna[target] = snp;
        return this.dna;
      },
  
      compareDNA (passedP) {
        let count = 0;
        for (let i in this.dna) {
          if (passedP.dna[i] === this.dna[i]) {count ++;}
        }
        let percentage = Math.round(count * 100 / this.dna.length);
        return `The specimen ${this.specimenNum} and specimen ${passedP.specimenNum} have ${percentage}% in common.`;
      },
  
      willLikelySurvive () {
        let strongBp = 0;
        this.dna.forEach(nt => nt === 'C' || nt === 'G' ? strongBp ++ : strongBp);
        let percentage = Math.round(strongBp * 100 / this.dna.length);
        if (percentage >= 60) return true;
        else return false;
      }
      }
  }
  
  // store the 30 P.Aequor in a array for future usage.
  let num = 0;
  let pAequorArr = [];
  do {
    let temp = pAequorFactory(num, mockUpStrand());
    if (temp.willLikelySurvive()) {
      pAequorArr.push(temp);
    };
    num ++;
  }while(pAequorArr.length < 30)
  
  console.log(pAequorArr)
  
  
  
  
  