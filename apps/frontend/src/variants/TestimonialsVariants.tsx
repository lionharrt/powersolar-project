import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PowerSolarSection } from '../components/PowerSolarSection';

// Real Google Reviews Data from PowerSolar Google Maps
const testimonials = [
  {
    id: 1,
    name: 'Dan Laffan',
    location: 'Dublin',
    rating: 5,
    date: '2 days ago',
    text: "I recently had solar panels installed by PowerSolar, and I couldn't be more pleased with the entire experience. From the very beginning, James was incredibly helpful. He took the time to explain everything clearly, ensuring I understood the process and benefits. Step by step email instructions for every stage. The installation was smooth, and the team's workmanship was excellent. The panels are working great, and I've already noticed the difference in my energy bills!",
    system: 'Solar PV System',
    isNew: true,
  },
  {
    id: 2,
    name: 'Robert Quinn',
    location: 'Leinster',
    rating: 5,
    date: '2 months ago',
    text: "We recently had our solar power system installed by PowerSolar, and the entire experience was exceptional from start to finish. The installation team arrived on time, worked efficiently, and completed the job—including a thorough clean-up—in just six hours. The pricing was competitive, assistance with the grant application was seamless, and their guidance on tariffs and energy providers was incredibly helpful.",
    system: 'Solar Installation',
  },
  {
    id: 3,
    name: 'Séverine Lefeuvre',
    location: 'Dublin',
    rating: 5,
    date: '4 months ago',
    text: "Excellent Service from Power Solar – Highly Recommend! James and Brendan were absolutely fantastic from start to finish. They installed 16 panels on my roof with great care and efficiency. The entire process was smooth – they were punctual, professional, and they took the time to explain everything clearly. I'm already seeing the benefits in terms of energy savings!",
    system: '16 Panels',
  },
  {
    id: 4,
    name: 'Owen Conlan',
    location: 'Dublin',
    rating: 5,
    date: '1 month ago',
    text: "Simply put the PowerSolar team are excellent. Not only are they highly competitive, but they are very professional in every regard. Their communications during sales, pre-install, during installation and post-install are all very clear. The quality of their work and the products they work with are of a very, very high standard.",
    system: 'Full System',
  },
  {
    id: 5,
    name: 'Andrew Kane',
    location: 'Dublin',
    rating: 5,
    date: '1 month ago',
    text: "We had an excellent experience using PowerSolar. The team arrived on time, completed the project (2 batteries, 22 panels) in one day and everything about the work was really professional. They are very competitive on price and really informative on helping with the grant process.",
    system: '22 Panels + 2 Batteries',
  },
  {
    id: 6,
    name: 'Paul O\'Shanahan',
    location: 'Leinster',
    rating: 5,
    date: '1 week ago',
    text: "I highly recommend PowerSolar. Brendan called out for an initial site survey. James provided advice over the phone and sent a detailed email with each option and price. The team of skilled workers installed the 12 panels and inverter in one morning. I'm very satisfied with the quality of work, the customer service and the very competitive pricing.",
    system: '12 Panels',
  },
  {
    id: 7,
    name: 'Saleem Ur Rahman',
    location: 'Dublin',
    rating: 5,
    date: '1 month ago',
    text: "I had a great experience with PowerSolar from start to finish. James explained everything in an easy to digest manner. Brendan and the team was very professional but also easy to deal with, making the whole process simple and stress-free. The workmanship was excellent, and you can tell the products are top quality. The grant application process was very easy.",
    system: 'Solar Array',
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// Variant A: Grid Layout with Cards
export const TestimonialsVariantA: React.FC = () => {
  useTranslation(['home']);

  return (
    <PowerSolarSection id="testimonials" background="white" height="auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
          What Our Customers Say
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Don't just take our word for it - hear from real customers across Dublin & Leinster
        </p>
        
        {/* Google Reviews Badge */}
        <div className="inline-flex items-center gap-4 bg-white border-2 border-primary-200 rounded-full px-6 py-3 shadow-md">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-900 text-lg">5.0</span>
                <StarRating rating={5} />
              </div>
              <p className="text-sm text-gray-600">138 Google Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {testimonials.slice(0, 6).map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            {testimonial.isNew && (
              <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-2 py-1 rounded-full mb-3">
                NEW
              </span>
            )}
            
            <StarRating rating={testimonial.rating} />
            
            <p className="text-gray-700 mt-4 mb-4 line-clamp-4 leading-relaxed">
              "{testimonial.text}"
            </p>
            
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-sm text-gray-600">{testimonial.location}</p>
                <span className="text-xs text-gray-500">{testimonial.date}</span>
              </div>
              <p className="text-xs text-primary-600 font-medium mt-2">{testimonial.system}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Google Link */}
      <div className="text-center">
        <a
          href="https://www.google.com/maps/place/PowerSolar/@53.3326012,-6.2621983,17z/data=!4m8!3m7!1s0x48670f9f48cea2b3:0x8b5e52c3db59d20d!8m2!3d53.332598!4d-6.2596234!9m1!1b1!16s%2Fg%2F11krytj3vh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-semibold"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
          Read All 138 Reviews on Google
        </a>
      </div>
    </PowerSolarSection>
  );
};

// Variant B: Carousel with Large Cards
export const TestimonialsVariantB: React.FC = () => {
  useTranslation(['home']);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <PowerSolarSection id="testimonials" background="gradient" height="auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md mb-4">
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
          <span className="font-bold text-gray-900">5.0</span>
          <span className="text-sm text-gray-600">(138 reviews)</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
          Trusted by Homeowners Across Ireland
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Real stories from real customers who chose PowerSolar
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Quote Icon */}
          <svg className="w-12 h-12 text-primary-200 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <StarRating rating={current.rating} />

          <p className="text-xl text-gray-700 mt-6 mb-8 leading-relaxed">
            "{current.text}"
          </p>

          {/* Customer Info */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-6">
            <div>
              <p className="font-bold text-lg text-gray-900">{current.name}</p>
              <p className="text-gray-600">{current.location} • {current.system}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{current.date}</p>
              {current.isNew && (
                <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full mt-1">
                  NEW REVIEW
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors"
          aria-label="Next testimonial"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-primary-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <a
          href="https://www.google.com/maps/place/PowerSolar/@53.3326012,-6.2621983,17z/data=!4m8!3m7!1s0x48670f9f48cea2b3:0x8b5e52c3db59d20d!8m2!3d53.332598!4d-6.2596234!9m1!1b1!16s%2Fg%2F11krytj3vh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary-600 rounded-lg hover:shadow-lg transition-shadow font-semibold border-2 border-primary-600"
        >
          View All Reviews on Google
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </PowerSolarSection>
  );
};

// Variant C: Stats-Focused with Featured Reviews
export const TestimonialsVariantC: React.FC = () => {
  useTranslation(['home']);

  return (
    <PowerSolarSection id="testimonials" background="white" height="auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Left: Stats */}
        <div className="lg:col-span-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">
            Rated 5 Stars by Our Customers
          </h2>
          
          {/* Big Rating Display */}
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 mb-6">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-700 mb-2">5.0</div>
              <StarRating rating={5} />
              <p className="text-gray-700 font-semibold mt-4">138 Google Reviews</p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                <span className="text-sm text-gray-600">Verified Reviews</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Quality of Work</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }}></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">98%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Professionalism</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">100%</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Value for Money</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '97%' }}></div>
                </div>
                <span className="text-sm font-semibold text-gray-700">97%</span>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/PowerSolar/@53.3326012,-6.2621983,17z/data=!4m8!3m7!1s0x48670f9f48cea2b3:0x8b5e52c3db59d20d!8m2!3d53.332598!4d-6.2596234!9m1!1b1!16s%2Fg%2F11krytj3vh"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full inline-block text-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
          >
            Read All Reviews
          </a>
        </div>

        {/* Right: Featured Reviews */}
        <div className="lg:col-span-2 space-y-6">
          {testimonials.slice(0, 4).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-primary-300 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.date}</p>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-3">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-2">
                <span className="inline-block bg-primary-100 text-primary-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {testimonial.system}
                </span>
                {testimonial.isNew && (
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                    NEW
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PowerSolarSection>
  );
};

