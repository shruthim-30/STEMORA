import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: "book_free_class" | "book_expo_slot";
}

export default function ContactFormModal({
  isOpen,
  onClose,
  formType,
}: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    courseInterest: "",
    message: "",
  });

  const submitMutation = trpc.contact.submitForm.useMutation({
    onSuccess: () => {
      toast.success("Thank you! We will contact you soon.");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        courseInterest: "",
        message: "",
      });
      onClose();
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to submit form");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    submitMutation.mutate({
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      courseInterest:
        formData.courseInterest === ""
          ? undefined
          : formData.courseInterest,
      message:
        formData.message.trim() === ""
          ? undefined
          : formData.message.trim(),
      formType,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="glass-panel bg-white/95 rounded-3xl shadow-[0_40px_80px_-24px_rgba(10,61,145,0.45)] max-w-md w-full overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-2 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between px-7 pt-7 pb-5 border-b border-slate-100">
          <div>
            <span className="eyebrow mb-2">
              <span className="eyebrow-dot" />
              {formType === "book_free_class" ? "Free Trial" : "Expo Slot"}
            </span>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              {formType === "book_free_class"
                ? "Book Free Class"
                : "Book a Slot"}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-7 space-y-4">
          <Input
            name="fullName"
            placeholder="Full Name *"
            value={formData.fullName}
            onChange={handleChange}
            className="h-12 rounded-xl border-slate-200 focus-visible:ring-primary/40"
          />

          <Input
            name="email"
            type="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="h-12 rounded-xl border-slate-200 focus-visible:ring-primary/40"
          />

          <Input
            name="phone"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleChange}
            className="h-12 rounded-xl border-slate-200 focus-visible:ring-primary/40"
          />

          <select
            name="courseInterest"
            value={formData.courseInterest}
            onChange={handleChange}
            className="w-full h-12 border border-slate-200 rounded-xl px-3.5 text-sm text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow appearance-none"
          >
            <option value="">Select a course</option>
            <option value="Young Innovators Course">Young Innovators Course</option>
            <option value="Robotics Base Course">Robotics Base Course</option>
            <option value="Robotics Circuit Course">Robotics Circuit Course</option>
            <option value="Robotics Summer Camps">Robotics Summer Camps</option>
            <option value="Robotics Exhibitions">Robotics Exhibitions</option>
            <option value="Internship">Internship</option>
          </select>

          <Textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="rounded-xl border-slate-200 focus-visible:ring-primary/40 min-h-24"
          />

          <Button
            type="submit"
            disabled={submitMutation.isPending}
            className="btn-premium w-full h-13 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold"
          >
            {submitMutation.isPending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}
