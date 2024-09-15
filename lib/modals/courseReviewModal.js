const { default: mongoose } = require("mongoose");

const courseReviewSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        courseId: { type: String, required: true },
        review: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.courseReview || mongoose.model("courseReview", courseReviewSchema);
