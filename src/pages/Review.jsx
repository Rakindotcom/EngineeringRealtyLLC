import { useState, useRef } from "react";
import { FaStar, FaGoogle, FaYelp, FaFacebook, FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Review = () => {
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({ rating: false, review: false, name: false });
    const fileInputRef = useRef(null);
    const carouselRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {
            rating: rating === 0,
            review: review.trim() === "",
            name: name.trim() === ""
        };

        if (Object.values(newErrors).some(error => error)) {
            setErrors(newErrors);
            return;
        }

        // Submit logic here
        console.log({ name, rating, review, photo });

        // Reset form
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        setReview("");
        setRating(0);
        setName("");
        setPhoto(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const renderCarouselArrow = (clickHandler, isPrev) => (
        <button
            onClick={clickHandler}
            className={`absolute top-1/2 -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 cursor-pointer z-10 hover:bg-gray-700 transition-colors ${isPrev ? '-left-12' : '-right-12'
                }`}
            aria-label={isPrev ? "Previous testimonial" : "Next testimonial"}
        >
            {isPrev ? <FaChevronLeft size={24} /> : <FaChevronRight size={24} />}
        </button>
    );

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-12">
            {/* Success Message */}
            {showSuccess && (
                <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex items-center animate-fade-in shadow-md">
                    <FaCheckCircle className="mr-2 flex-shrink-0" />
                    <span>Thank you for your review!</span>
                </div>
            )}

            {/* Testimonial Section */}
            <section aria-label="Client testimonials">
                <h2 className="text-3xl font-semibold mb-6 text-center">⭐ What Our Clients Say</h2>
                <div className="relative">
                    {renderCarouselArrow(() => carouselRef.current?.decrement(), true)}
                    {renderCarouselArrow(() => carouselRef.current?.increment(), false)}

                    <Carousel
                        ref={carouselRef}
                        showArrows={false} // This hides the default arrows
                        showThumbs={false}
                        autoPlay
                        infiniteLoop
                        interval={5000}
                        showStatus={false}
                        className="shadow-lg rounded-xl overflow-hidden bg-gray-100 border border-gray-300"
                    >
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-8 min-h-[200px] flex flex-col justify-center">
                                <p className="text-lg text-yellow-500 mb-4" aria-hidden="true">
                                    {"⭐".repeat(5)}
                                </p>
                                <blockquote className="text-lg italic text-gray-700 mb-4">
                                    "{testimonial.text}"
                                </blockquote>
                                <cite className="font-bold text-gray-900 not-italic">
                                    {testimonial.author}
                                </cite>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </section>

            {/* Review Form */}
            <section aria-label="Submit your review">
                <div className="p-6 border rounded-xl shadow-md bg-white">
                    <h3 className="text-2xl font-semibold text-center mb-6">Share Your Experience</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name Field */}
                        <div>
                            <label className="block text-sm font-medium mb-2 required">
                                Your Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setErrors(prev => ({ ...prev, name: false }));
                                }}
                                className={`w-full p-3 border-2 border-gray-500 rounded-lg focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-200' : 'focus:ring-blue-200'}`}
                                aria-invalid={errors.name}
                                aria-describedby="name-error"
                            />
                            {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">Please enter your name</p>}
                        </div>

                        {/* Rating Field */}
                        <div>
                            <label className="block text-sm font-medium mb-2 required">
                                Rating
                            </label>
                            <div className={`flex gap-2 justify-center p-2 rounded-lg ${errors.rating ? 'bg-red-50 border border-red-500' : ''}`}>
                                {[...Array(5)].map((_, i) => {
                                    const ratingValue = i + 1;
                                    return (
                                        <button
                                            key={i}
                                            type="button"
                                            className={`text-3xl transition-transform duration-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-full ${ratingValue <= (hoverRating || rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                                            onClick={() => setRating(ratingValue)}
                                            onMouseEnter={() => setHoverRating(ratingValue)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            aria-label={`${ratingValue} star${ratingValue !== 1 ? 's' : ''}`}
                                        >
                                            <FaStar />
                                        </button>
                                    );
                                })}
                            </div>
                            {errors.rating && <p className="text-red-500 text-sm mt-1 text-center">Please select a rating</p>}
                        </div>

                        {/* Review Field */}
                        <div>
                            <label className="block text-sm font-medium mb-2 required">
                                Your Review
                            </label>
                            <textarea
                                value={review}
                                onChange={(e) => {
                                    setReview(e.target.value);
                                    setErrors(prev => ({ ...prev, review: false }));
                                }}
                                className={`w-full p-3 border-2 border-gray-500 rounded-lg focus:ring-2 ${errors.review ? 'border-red-500 focus:ring-red-200' : 'focus:ring-blue-200'} h-32`}
                                aria-invalid={errors.review}
                                aria-describedby="review-error"
                            />
                            {errors.review && <p id="review-error" className="text-red-500 text-sm mt-1">Please write your review</p>}
                        </div>

                        {/* Photo Upload */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Upload Photo (optional)
                            </label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setPhoto(e.target.files[0])}
                                    ref={fileInputRef}
                                    className="hidden"
                                    id="photo-upload"
                                />
                                <label
                                    htmlFor="photo-upload"
                                    className="cursor-pointer border-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors"
                                >
                                    Choose File
                                </label>
                                <span className="text-sm text-gray-500">
                                    {photo ? photo.name : "No file chosen"}
                                </span>
                            </div>
                            {photo && (
                                <div className="mt-4 relative">
                                    <img
                                        src={URL.createObjectURL(photo)}
                                        alt="Preview"
                                        className="w-32 h-32 rounded-lg object-cover border"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setPhoto(null);
                                            fileInputRef.current.value = "";
                                        }}
                                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                                        aria-label="Remove photo"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors font-semibold"
                        >
                            Post Review
                        </button>
                    </form>
                </div>
            </section>

            {/* Social Proof Section */}
            <section aria-label="Review platforms">
                <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4">Review Us on Your Favorite Platform</h3>
                    <div className="flex justify-center gap-4 flex-wrap">
                        {[
                            { platform: 'Google', icon: FaGoogle, color: 'bg-red-600 hover:bg-red-700' },
                            { platform: 'Yelp', icon: FaYelp, color: 'bg-red-500 hover:bg-red-600' },
                            { platform: 'Facebook', icon: FaFacebook, color: 'bg-blue-800 hover:bg-blue-900' },
                        ].map(({ platform, icon: Icon, color }) => (
                            <a
                                key={platform}
                                href="#"
                                className={`flex items-center gap-2 ${color} text-white px-6 py-3 rounded-lg transition-colors min-w-[150px] justify-center`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon className="text-lg" />
                                <span>{platform}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const testimonials = [
    {
        text: "Engineering Realty made buying our first home so easy! Their expertise and dedication were outstanding.",
        author: "John & Sarah D., Happy Homeowners"
    },
    {
        text: "A seamless process from start to finish. Highly recommend Engineering Realty for anyone looking to buy or sell a home!",
        author: "Michael T., First-time Homebuyer"
    },
    // Add more testimonials here
];

export default Review;
