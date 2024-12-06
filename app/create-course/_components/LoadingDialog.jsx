import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from 'next/image';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'; // Import VisuallyHidden

function LoadingDialog({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="flex justify-center items-center bg-white rounded-lg shadow-lg p-8 max-w-xs w-full">
        <AlertDialogHeader>
          <VisuallyHidden>
            <AlertDialogTitle>Loading...</AlertDialogTitle> {/* Visually hide the title */}
          </VisuallyHidden>
          <AlertDialogDescription className="flex flex-col justify-center items-center text-center">
            <Image unoptimized src="/progress.gif" alt="Loading" width={100} height={100} />
            <span className="mt-4 text-lg font-semibold text-gray-600">Loading...</span> {/* Replaced <div> with <span> */}
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default LoadingDialog;
