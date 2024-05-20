import React from 'react'
import Image from 'next/image'

export default function ScientificReference() {
  return (
    <>
      <div className='lg:w-7/12 mx-auto mt-24 mb-5'>
        <h1 className='headline font-bold text-center'>
          Scientific References
        </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center mx-auto w-full md:flex md:justify-center">
        <div className="w-full md:mb-0 md:mr-4 flex justify-center p-5">
          <Image
            src="/refs-logos.png"
            className='image'
            width={800}
            height={40}
            priority
            alt="..."
          />
        </div>

      </div>

      <p className="text-xs text-center mt-8 mb-6 px-5">The company is not endorsed by, sponsored by, or affiliated with any of these organizations</p>

      <div className="p-4 flex flex-wrap justify-center items-center mx-auto w-full md:w-10/12 md:flex md:justify-center">
        <div className="w-full md:w-6/12 px-5">
          <ol className="list-decimal text-xs">
            <li className="mb-2">McVary KT. BPH: epidemiology and comorbidities. American Journal of Managed Care. 2006;12(5 Suppl):S122-8.</li>
            <li className="mb-2">Roehrborn CG, McConnell JD, Lieber M, et al. Serum prostate-specific antigen concentration is a powerful predictor of acute urinary retention and need for surgery in men with clinical benign prostatic hyperplasia. Urology. 1999;53(3):473-80.</li>
            <li className="mb-2">Barry MJ, Fowler FJ Jr, O&apos;Leary MP, et al. The American Urological Association symptom index for benign prostatic hyperplasia. The Measurement Committee of the American Urological Association. Journal of Urology. 1992;148(5):1549-57; discussion 1564.</li>
            <li className="mb-2">Parsons JK, Bergstrom J, Barrett-Connor E. Lipids, lipoproteins and the risk of benign prostatic hyperplasia in community-dwelling men. BJU International. 2008;101(3):313-8.</li>
            <li className="mb-2">Berry SJ, Coffey DS, Walsh PC, Ewing LL. The development of human benign prostatic hyperplasia with age. Journal of Urology. 1984;132(3):474-9.</li>
            <li className="mb-2">Platz EA, Rimm EB, Kawachi I, et al. Alcohol consumption, cigarette smoking, and risk of benign prostatic hyperplasia. American Journal of Epidemiology. 1999;149(2):106-15.</li>
            <li className="mb-2">Roberts RO, Jacobsen SJ, Rhodes T, et al. Race, agricultural chemical exposures, and risk of prostate cancer. American Journal of Epidemiology. 1996;143(7):683-92.</li>
            <li className="mb-2">Gratzke C, Bachmann A, Descazeaud A, et al. EAU guidelines on the assessment of non-neurogenic male lower urinary tract symptoms including benign prostatic obstruction. European Urology. 2015;67(6):1099-109.</li>
            <li className="mb-2">Platz EA, Leitzmann MF, Rimm EB, et al. Alcohol intake, drinking patterns, and risk of prostate cancer in a large prospective cohort study. American Journal of Epidemiology. 2004;159(5):444-53.</li>
            <li className="mb-2">Liu Y, Hu F, Li D, et al. Does physical activity reduce the risk of prostate cancer? A systematic review and meta-analysis. European Urology. 2011;60(5):1029-44.</li>
            <li className="mb-2">Giovannucci E, Rimm EB, Liu Y, et al. A prospective study of tomato products, lycopene, and prostate cancer risk. Journal of the National Cancer Institute. 2002;94(5):391-8.</li>
            <li className="mb-2">Platz EA, Rohrmann S, Pearson JD, et al. Racial variation in serum testosterone levels: a cross-sectional study of 30,000 men from the Prostate Cancer Prevention Trial. Journal of the National Cancer Institute. 2000;92(5):208-15.</li>
            <li className="mb-2">Roberts RO, Bergstralh EJ, Bass SE, et al. Incidence of physician-diagnosed prostatitis in the United States: The Olmsted County Study of Urinary Symptoms and Health Status Among Men. Urology. 1995;46(6):862-7.</li>
            <li className="mb-2">Platz EA, De Marzo AM. Epidemiology of inflammation and prostate cancer. Journal of Urology. 2004;171(2 Pt 2):S36-40.</li>
          </ol>
        </div>
        <div className="w-full md:w-6/12 ">
          <ol start={15} className="list-decimal text-xs px-5">

            <li className="mb-2">Platz EA, De Marzo AM, Erlinger TP, et al. No association between toenail selenium levels and prostate cancer risk. Cancer Epidemiology, Biomarkers & Prevention. 2002;11(11):1299-300.</li>
            <li className="mb-2">Platz EA, De Marzo AM, Giovannucci E. Prostate cancer association studies: pitfalls and solutions to cancer misclassification in the PSA era. Journal of Cellular Biochemistry. 2004;91(3):553-71.</li>
            <li className="mb-2">Rohrmann S, Nelson WG, Rifai N, et al. Serum estrogen, but not testosterone, levels differ between black and white men in a nationally representative sample of Americans. Journal of Clinical Endocrinology and Metabolism. 2007;92(7):2519-25.</li>
            <li className="mb-2">Roberts RO, Rhodes T, Panser LA, et al. Natural history of prostatism: risk factors for acute urinary retention. Journal of Urology. 1997;158(2):481-7.</li>
            <li className="mb-2">De Nunzio C, Kramer G, Marberger M, Montironi R, Nelson W, Schröder F, Sciarra A, Tubaro A, Mottet N. The controversial relationship between benign prostatic hyperplasia and prostate cancer: the role of inflammation. European Urology. 2011;60(1):106-17.</li>
            <li className="mb-2">Rohrmann S, Nelson WG, Rifai N, et al. Serum sex steroid hormones and lower urinary tract symptoms in Third National Health and Nutrition Examination Survey (NHANES III). Urology. 2007;69(4):708-13.</li>
            <li className="mb-2">Albertsen PC, Hanley JA, Gleason DF, et al. Competing risk analysis of men aged 55 to 74 years at diagnosis managed conservatively for clinically localized prostate cancer. Journal of the American Medical Association. 1998;280(11):975-80.</li>
            <li className="mb-2">Antwi SO, Steck SE, Zhang H, et al. Plasma carotenoids and tocopherols in relation to prostate-specific antigen (PSA) levels among men with biochemical recurrence of prostate cancer. Cancer Epidemiology, Biomarkers & Prevention. 2015;24(5):793-8.</li>
            <li className="mb-2">Jacobsen SJ, Jacobson DJ, Girman CJ, et al. Natural history of prostatism: risk factors for acute urinary retention. Journal of Urology. 1997;158(2):481-7.</li>
            <li className="mb-2">De Nunzio C, Kramer G, Marberger M, Montironi R, Nelson W, Schröder F, Sciarra A, Tubaro A, Mottet N. The controversial relationship between benign prostatic hyperplasia and prostate cancer: the role of inflammation. European Urology. 2011;60(1):106-17.</li>
            <li className="mb-2">Rohrmann S, Nelson WG, Rifai N, et al. Serum sex steroid hormones and lower urinary tract symptoms in Third National Health and Nutrition Examination Survey (NHANES III). Urology. 2007;69(4):708-13.</li>
            <li className="mb-2">Albertsen PC, Hanley JA, Gleason DF, et al. Competing risk analysis of men aged 55 to 74 years at diagnosis managed conservatively for clinically localized prostate cancer. Journal of the American Medical Association. 1998;280(11):975-80.</li>
            <li className="mb-2">Antwi SO, Steck SE, Zhang H, et al. Plasma carotenoids and tocopherols in relation to prostate-specific antigen (PSA) levels among men with biochemical recurrence of prostate cancer. Cancer Epidemiology, Biomarkers & Prevention</li>
          </ol>
        </div>
      </div>


    </>
  )
}
