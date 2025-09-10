import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Calendar, Clock, User, Mail, Phone, Instagram, Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    instagram: '',
    dateOfBirth: '',
    description: '',
    referenceImage: null as File | null
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, referenceImage: file }));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // ✅ Basic validation
  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.phone
  ) {
    toast({
      title: "Missing Information",
      description: "Please fill in all required fields.",
      variant: "destructive",
    });
    return;
  }

  // ✅ Age validation
  const birthDate = new Date(formData.dateOfBirth);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  if (age < 18) {
    toast({
      title: "Age Requirement",
      description: "You must be 18 or older to book an appointment.",
      variant: "destructive",
    });
    return;
  }

  // ✅ Show loading toast
  toast({
    title: "Uploading...",
    description: formData.referenceImage
      ? "Uploading your image and preparing WhatsApp message..."
      : "Preparing your WhatsApp message...",
  });

  // ✅ Owner's WhatsApp number
  const phoneNumber = "201288744555";

  // ✅ Upload image if provided
  let imageUrl = "";
  if (formData.referenceImage) {
    try {
      const data = new FormData();
      data.append("file", formData.referenceImage);
      data.append("upload_preset", "unsigned_upload");
      data.append("cloud_name", "dmj8mjqby");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dmj8mjqby/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const imgData = await res.json();
      if (imgData.secure_url) {
        imageUrl = imgData.secure_url;
      } else {
        toast({
          title: "Image Upload Failed",
          description: "Couldn't upload image. Please try again or proceed without an image.",
          variant: "destructive",
        });
        return;
      }
    } catch (err) {
      console.error("Image upload failed", err);
      toast({
        title: "Image Upload Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
      return;
    }
  }

  // ✅ Build the WhatsApp message
  const message = `
📌 *New Tattoo Booking Request*

👤 Name: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📸 Instagram: ${formData.instagram || "N/A"}
🎂 Date of Birth: ${formData.dateOfBirth || "N/A"}
📝 Description: ${formData.description || "N/A"}
${imageUrl ? `🖼️ Reference Image: ${imageUrl}` : ""}
`;

  // ✅ Detect device (mobile or desktop)
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const whatsappUrl = isMobile
    ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  // ✅ Open WhatsApp AFTER image upload completes
  window.open(whatsappUrl, "_blank");

  // ✅ Success toast
  toast({
    title: "Redirecting to WhatsApp...",
    description: "Your booking request will be sent via WhatsApp.",
  });

  // ✅ Reset form after sending
  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    instagram: "",
    dateOfBirth: "",
    description: "",
    referenceImage: null,
  });

  setShowForm(false);
};



  return (
    <section id="booking" className="section-padding bg-tattoo-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {!showForm ? (
            /* CTA Section */
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-tattoo-light mb-6">
                BOOK YOUR <span className="text-tattoo-red">APPOINTMENT</span>
              </h2>
              <p className="text-xl text-tattoo-light/80 mb-8 max-w-2xl mx-auto">
                Start your tattoo journey with a custom design by Michael.
                <br />
                <span className="text-tattoo-yellow font-semibold">All sessions are by appointment only.</span>
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="tattoo-card p-6 text-center">
                  <div className="w-16 h-16 bg-tattoo-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="text-tattoo-red" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-tattoo-light mb-2">Consultation</h3>
                  <p className="text-tattoo-light/70 text-sm">Free design consultation to bring your vision to life</p>
                </div>

                <div className="tattoo-card p-6 text-center">
                  <div className="w-16 h-16 bg-tattoo-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="text-tattoo-red" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-tattoo-light mb-2">Custom Design</h3>
                  <p className="text-tattoo-light/70 text-sm">Personalized artwork created specifically for you</p>
                </div>

                <div className="tattoo-card p-6 text-center">
                  <div className="w-16 h-16 bg-tattoo-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-tattoo-red" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-tattoo-light mb-2">Professional Service</h3>
                  <p className="text-tattoo-light/70 text-sm">Clean, safe environment with aftercare support</p>
                </div>
              </div>

              <Button
                variant="tattoo-primary"
                size="lg"
                onClick={() => setShowForm(true)}
                className="text-lg px-12 py-6 h-auto tattoo-glow"
              >
                Book Now
              </Button>
            </div>
          ) : (
            /* Booking Form */
            <div>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-tattoo-light mb-4">
                  BOOKING <span className="text-tattoo-red">FORM</span>
                </h2>
                <p className="text-tattoo-light/80">
                  Fill out the details below and we'll get back to you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="tattoo-card p-8 space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-tattoo-light">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-tattoo-darker border-tattoo-red/30 text-tattoo-light"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-tattoo-light">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-tattoo-darker border-tattoo-red/30 text-tattoo-light"
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-tattoo-light">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-tattoo-darker border-tattoo-red/30 text-tattoo-light"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-tattoo-light">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-tattoo-darker border-tattoo-red/30 text-tattoo-light"
                      required
                    />
                  </div>
                </div>

                {/* Instagram & DOB */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="instagram" className="text-tattoo-light">Instagram</Label>
                    <Input
                      id="instagram"
                      name="instagram"
                      value={formData.instagram}
                      onChange={handleInputChange}
                      placeholder="@username"
                      className="bg-tattoo-darker border-tattoo-red/30 text-tattoo-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth" className="text-tattoo-light">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="bg-tattoo-darker border-tattoo-red/30 text-tattoo-light"
                      required
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-tattoo-light">Brief Description and Size of Design *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your tattoo idea, preferred size, and placement..."
                    className="bg-tattoo-darker border-tattoo-red/30 text-tattoo-light min-h-[120px]"
                   
                  />
                </div>

                {/* Reference Image */}
                <div className="space-y-2">
                  <Label htmlFor="referenceImage" className="text-tattoo-light">Reference Image</Label>
                  <div className="border-2 border-dashed border-tattoo-red/30 rounded-lg p-6 text-center hover:border-tattoo-red/50 transition-colors">
                    <input
                      id="referenceImage"
                      name="referenceImage"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="referenceImage" className="cursor-pointer">
                      <Upload className="text-tattoo-red mx-auto mb-2" size={32} />
                      <p className="text-tattoo-light/70">
                        {formData.referenceImage ? formData.referenceImage.name : 'Click to upload reference image'}
                      </p>
                    </label>
                  </div>
                </div>

                {/* Age Notice */}
                <div className="bg-tattoo-red/10 border border-tattoo-red/30 rounded-lg p-4">
                  <p className="text-tattoo-light text-sm">
                    <strong>Important:</strong> You must be 18 or older at the time of your appointment. 
                    Valid ID will be required during your visit.
                  </p>
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button
                    type="button"
                    variant="tattoo-outline"
                    onClick={() => setShowForm(false)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="tattoo-primary"
                    className="flex-1"
                  >
                    Submit Booking Request
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;