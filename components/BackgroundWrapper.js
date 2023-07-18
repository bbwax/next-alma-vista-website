export default function BackgroundWrapper({ children }) {
    return (
        <div className="min-h-screen bg-cover bg-center bg-sunset" >
            {children}
        </div>
    );
}

//style={{ backgroundImage: "url('/images/bg-beige.jpg')" }}