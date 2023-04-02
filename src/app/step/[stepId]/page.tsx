import { FormContainer, FormContainerProps } from "@/components/form-container";
import { FORM_STEPS } from "@/constants/form-steps";

export async function generateStaticParams() {
    return FORM_STEPS.map((step) => ({
        stepId: step.id,
    }));
}

export default function Home({ params }: { params: FormContainerProps }) {
    return <FormContainer stepId={Number(params.stepId || 0)} />;
}
