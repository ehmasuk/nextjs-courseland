const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        slug: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.categories || mongoose.model("categories", categorySchema);
