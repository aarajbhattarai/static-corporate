import Image from 'next/image';
import { Container } from '@/components/Container';
import avatarImage1 from '@/images/avatars/avatar-1.png';
import avatarImage2 from '@/images/avatars/avatar-2.png';
import avatarImage3 from '@/images/avatars/avatar-3.png';
import avatarImage4 from '@/images/avatars/avatar-4.png';
import avatarImage5 from '@/images/avatars/avatar-5.png';

const testimonials = [
  [
    {
      content:
        'Zen Career Hub is an incredible platform that provides personalized career counseling and guidance to students. I am grateful for their support and expertise in helping me shape my career path.',
      author: {
        name: 'Nishesh karki',
        role: 'Student at Zen Career Hub',
        image: avatarImage1,
      },
    },
    {
      content:
        'Zen Career Hub has been instrumental in providing me with valuable insights and resources for my career development. Their workshops and industry connections have been invaluable in my journey.',
      author: {
        name: 'Sarita Maharjan',
        role: 'Student at Zen Career Hub',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        'I highly recommend Zen Career Hub to all students who are looking for guidance and support in their career aspirations. The team at Zen is dedicated and knowledgeable, and their services have made a significant impact on my career prospects.',
      author: {
        name: 'Rajiv Shrestha',
        role: 'Student at Zen Career Hub',
        image: avatarImage5,
      },
    },
    {
      content:
        'Zen Career Hub has exceeded my expectations in terms of the quality of career counseling and assistance provided. Their personalized approach and industry insights have helped me make informed decisions about my career.',
      author: {
        name: 'Sunita Tamang',
        role: 'Student at Zen Career Hub',
        image: avatarImage2,
      },
    },
  ],
  [
    {
      content:
        'Zen Career Hub has been a game-changer for me. Their career counseling sessions have given me clarity and direction in choosing the right career path. I am grateful for their guidance and support.',
      author: {
        name: 'Bibek Thapa',
        role: 'Student at Zen Career Hub',
        image: avatarImage3,
      },
    },
    {
      content:
        'I cannot thank Zen Career Hub enough for their support and guidance. Their expertise and resources have helped me navigate the complexities of career planning and development. I highly recommend their services to all students.',
      author: {
        name: 'Srijana Rai',
        role: 'Student at Zen Career Hub',
        image: avatarImage4,
      },
    },
  ],
];

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      {/* SVG path */}
    </svg>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            What Our Students Are Saying
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Discover the impact Zen Career Hub has made on the lives and careers
            of our students. Hear their testimonials and success stories.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
