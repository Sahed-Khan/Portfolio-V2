#include <stdio.h>
#include <string.h>

void encrypt(char str[], int key){
    for(int i = 0; str[i] != '\0'; i++){
        char c = str[i];
        if(c >= 'a' && c <= 'z'){
            str[i] = ((c - 'a' + key) % 26) + 'a';
        } else if(c >= 'A' && c <= 'Z'){
            str[i] = ((c - 'A' + key) % 26) + 'A';
        }
    }
}

void decrypt(char str[], int key){
    encrypt(str, 26 - key);
}

int main() {
    char text[100];
    int key;

    printf("Enter text to encrypt: ");
    fgets(text, sizeof(text), stdin);
    text[strcspn(text, "\n")] = 0; // remove newline

    printf("Enter key (1-25): ");
    scanf("%d", &key);

    encrypt(text, key);
    printf("Encrypted text: %s\n", text);

    decrypt(text, key);
    printf("Decrypted text: %s\n", text);

    return 0;
}
