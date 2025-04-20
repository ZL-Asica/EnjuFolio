import Link from 'next/link'

export const newsItems: NewsItem[] = [
  {
    date: '2025-02-27',
    content:
    <>
      Joining
      <Link
        href="https://spice-lab.org/"
        className="underline-interactive text-hover-primary -mx-1.5"
      >
        SPICE Lab
      </Link>
      {' '}
      at Northwestern University!
    </>,
  },
  {
    date: '2024-11-27',
    content:
    <>
      Joining
      <Link
        href="https://dtr.northwestern.edu/"
        className="underline-interactive text-hover-primary -mx-1.5"
      >
        DTR
      </Link>
      {' '}
      at Northwestern University! Also maintaining the
      {' '}
      <Link
        href="https://github.com/NUDelta/dtr-web/commits/main/?author=ZL-Asica"
        className="underline-interactive text-hover-primary -mx-1.5"
      >
        lab’s website
      </Link>
      .
    </>,
  },
  {
    date: '2024-04-19',
    content:
    <>
      Accepted offer of
      <Link
        href="https://www.mccormick.northwestern.edu/computer-science/academics/graduate/masters/"
        className="underline-interactive text-hover-primary -mx-1.5"
      >
        MS in Computer Science program at Northwestern University
      </Link>
      .
    </>,
  },
  {
    date: '2023-10-10',
    content: 'Joining SEPE Research Group at UC Irvine for ICS Honor Program!',
  },
  {
    date: '2023-06-24',
    content: 'Joining Prof. Ren Hongliang’s Research Group at CUHK for USRP!',
  },
  {
    date: '2023-05-21',
    content:
    <>
      Joining
      <Link
        href="https://www.shilab.bio.uci.edu/"
        className="underline-interactive text-hover-primary -mx-1.5"
      >
        Shi Lab
      </Link>
      {' '}
      research group at UC Irvine!
    </>,
  },
]
