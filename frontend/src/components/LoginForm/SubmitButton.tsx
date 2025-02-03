interface SubmitButtonProps {
  isLoading: boolean;
}

export const SubmitButton = ({ isLoading }: SubmitButtonProps) => (
  <button
    type="submit"
    disabled={isLoading}
    className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white 
      ${isLoading 
        ? 'bg-violet-400 cursor-not-allowed' 
        : 'bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500'
      }`}
  >
    {isLoading ? 'Entrando...' : 'Entrar'}
  </button>
); 