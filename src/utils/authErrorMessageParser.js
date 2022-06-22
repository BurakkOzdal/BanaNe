export default function(errorCode) {
    switch (errorCode) {
        case "auth/invalid-email":
            return "Geçersiz e-posta adresi"

        case "auth/user-not-found":
            return "Kullanıcı bulunamadı"

        case "auth/email-already-exists":
            return "Kullanıcı zaten mevcut"
    
    
        default: 
        return errorCode;
    }
}