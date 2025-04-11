import React from 'react';

const Programs = () => {
  return (
    <div className='w-full max-w-auto mx-auto py-4 px-8 '>
         <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
  <section className="max-w-screen-xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Programs Offered</h2>
      <p className="text-lg text-gray-700">
        Explore our diploma programs designed to lead you to a brighter future.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Program 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="imahe6.png"
          alt="Hospitality Management"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            THREE-YEAR DIPLOMA IN HOSPITALITY MANAGEMENT TECHNOLOGY
          </h3>
          <p className="text-gray-600">(Leading to BS HOSPITALITY MANAGEMENT)</p>
        </div>
      </div>
      {/* Program 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src="imahe7.png"
          alt="Information Technology"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            THREE-YEAR DIPLOMA IN INFORMATION TECHNOLOGY
          </h3>
          <p className="text-gray-600">(Leading to BS INFORMATION TECHNOLOGY)</p>
        </div>
      </div>
    </div>
    {/* Image Gallery */}
    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
      <img
        className="w-full h-40 object-cover rounded-lg"
        src="imahe8.png"
        alt="Gallery Image 1"
      />
      <img
        className="w-full h-40 object-cover rounded-lg"
        src="imahe9.png"
        alt="Gallery Image 2"
      />
      <img
        className="w-full h-40 object-cover rounded-lg"
        src="imahe10.png"
        alt="Gallery Image 3"
      />
      
    </div>
  </section>
</div>

<div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
  <section className="max-w-screen-xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Short Courses</h2>
      <p className="text-lg text-gray-700">
        Enhance your skills with our short courses designed for career advancement.
      </p>
    </div>

    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Dagupan City, Pangasinan</h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Course 1 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Bookkeeping NCII</h3>
        <p className="text-gray-600">409 hours</p>
        <p className="text-gray-500 text-sm">CTPR20170155SOCBKP307046</p>
      </div>
      {/* Course 2 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Food and Beverage Services NCII</h3>
        <p className="text-gray-600">499 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO.20170155TRSFBS213047</p>
      </div>
      {/* Course 3 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Food Processing NCII</h3>
        <p className="text-gray-600">773 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO. 20190155PFBFOP215017</p>
      </div>
      {/* Course 4 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Events Management Services NCIII</h3>
        <p className="text-gray-600">152 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO.20170155TRSEVM307045</p>
      </div>
      {/* Course 5 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Housekeeping NCII</h3>
        <p className="text-gray-600">436 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO. 20240155TRSHSK213025</p>
      </div>
      {/* Course 6 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Housekeeping NCIII</h3>
        <p className="text-gray-600">106 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO. 20170155TRSHSK308049</p>
      </div>
      {/* Course 7 */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Visual Graphics Design NCIII</h3>
        <p className="text-gray-600">682 hours</p>
        <p className="text-gray-500 text-sm">CTPR NO. 20170155ICTVGD307050</p>
      </div>
    </div>

    {/* Senior High School Programs */}
    <div className='mt-5'>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Senior High School Programs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Academic Track */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Academic Track</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Accountancy, Business and Management (ABM)</li>
            <li>Humanities and Social Sciences (HUMSS)</li>
          </ul>
        </div>
        {/* Tech-Voc Track */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Tech-Voc Track</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Information and Communication Technology (ICT)</li>
            <li>Home Economics (HE)</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
  <section className="max-w-screen-xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">San Jacinto, Pangasinan</h2>
    </div>

    {/* Agroentrepreneurship and Agriculture Programs */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Agriculture and Agroentrepreneurship Programs</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Program 1 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Agroentrepreneurship NCII</h4>
          <p className="text-gray-600">239 hours</p>
          <p className="text-gray-500 text-sm">CTPR NO. 20240155AFFAGE217036</p>
        </div>
        {/* Program 2 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Organic Agriculture Production NCII</h4>
          <p className="text-gray-600">232 hours</p>
          <p className="text-gray-500 text-sm">CTPR NO. 20210155AFFOAP212012</p>
        </div>
        {/* Program 3 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">Pest and Nutrient Management</h4>
          <p className="text-gray-600">40 hours</p>
          <p className="text-gray-500 text-sm">CTPR NO. 202201550008</p>
        </div>
        {/* Program 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-bold text-gray-800 mb-2">
            Production of High-Quality Inbreed Rice, Seed Certification, and Farm Mechanization
          </h4>
          <p className="text-gray-600">96 hours</p>
          <p className="text-gray-500 text-sm">CTPR NO. 202101550013</p>
        </div>
      </div>
    </div>

    
  </section>
</div>
</div>
<hr/>
<div className="bg-gray-50 py-12 px-6 sm:px-12 lg:px-24">
  <section className="max-w-screen-lg mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Apply for Scholarships</h2>
      <p className="text-lg text-gray-700">
        UAQTEA - Libreng edukasyon ang hatid ng Republic Act 10931 o Universal Access to Quality Tertiary Education Act.
      </p>
      <p className="text-lg text-gray-700 mt-2">
        Kasama rito ang libreng competency assessment at allowance.
      </p>
    </div>
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">Eligible Requirements</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-3">
        <li>Be a candidate for Senior High School graduation.</li>
        <li>Have no grade lower than 84% with a general average of 84% throughout High School.</li>
        <li>Active involvement in extracurricular and/or community activities.</li>
        <li>In good moral standing with no disciplinary action throughout high school.</li>
      </ul>
    </div>
  </section>

  
</div>



    </div>
  );
};

export default Programs;