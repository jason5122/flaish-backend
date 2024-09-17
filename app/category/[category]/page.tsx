'use client';

import { useParams, useRouter } from 'next/navigation';
import { AuthenticatedUserLayout } from '@/components';
import { flashcards } from '@/app/api/card/FlashCard';
import { useFlashCardContext } from '@/context/FlashCardContext';

export default function CategoryPage() {
    const { category } = useParams(); // Extract category from the dynamic route
    const router = useRouter();
    const { setCardByIndex } = useFlashCardContext();
    const decodedCategory = decodeURIComponent(category as string);

    const itemsToList = flashcards.filter(
        (item) => item.category === decodedCategory
    );

    const handleQuestionClick = (question: string) => {
        // Find the index of the clicked question in the flashcards array
        const flashcardIndex = flashcards.findIndex(
            (card) => card.question === question
        );

        // Set the current card index
        setCardByIndex(flashcardIndex);
        router.push("/card");
    };


    return (
        <AuthenticatedUserLayout>
            <div className="w-full h-full flex flex-col items-center justify-center px-8 pb-2">
                <div className='w-full flex items-start justify-center py-8'>
                    <h1 className="text-3xl font-bold mb-4 ">Category: {decodedCategory}</h1>
                </div>
                {/* Render content based on the category */}
                <div className='w-full flex flex-wrap justify-center items-center gap-2'>
                    {itemsToList.map((item, index) => (
                        <button key={index} onClick={() => handleQuestionClick(item.question)} className='w-fit px-4 py-2 h-fit bg-accent text-darkbg rounded-[7px]'>
                            {item.question}
                        </button>
                    ))}
                </div>

            </div>
        </AuthenticatedUserLayout>
    );
}
