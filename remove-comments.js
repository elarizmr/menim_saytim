const fs = require('fs');
const path = require('path');

function removeComments(code) {
    let result = '';
    let i = 0;
    
    while (i < code.length) {
        
        if (code[i] === '/' && code[i + 1] === '/') {
            
            while (i < code.length && code[i] !== '\n') {
                i++;
            }
            
            if (code[i] === '\n') {
                result += '\n';
                i++;
            }
            continue;
        }

        if (code[i] === '/' && code[i + 1] === '*') {
            
            i += 2;
            while (i < code.length - 1) {
                if (code[i] === '*' && code[i + 1] === '/') {
                    i += 2;
                    break;
                }
                if (code[i] === '\n') {
                    result += '\n';
                }
                i++;
            }
            continue;
        }

        if (code[i] === '"' || code[i] === "'" || code[i] === '`') {
            const quote = code[i];
            result += code[i];
            i++;
            while (i < code.length) {
                if (code[i] === '\\') {
                    result += code[i] + code[i + 1];
                    i += 2;
                    continue;
                }
                result += code[i];
                if (code[i] === quote) {
                    i++;
                    break;
                }
                i++;
            }
            continue;
        }
        
        result += code[i];
        i++;
    }

    result = result.replace(/\n\s*\n\s*\n+/g, '\n\n');
    
    return result;
}

function processFile(filePath) {
    try {
        const code = fs.readFileSync(filePath, 'utf8');
        const cleaned = removeComments(code);
        fs.writeFileSync(filePath, cleaned, 'utf8');
        console.log(`✓ ${filePath}`);
    } catch (err) {
        console.error(`✗ ${filePath}: ${err.message}`);
    }
}

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (
            file === 'node_modules' ||
            file === '.next' ||
            file === '.git' ||
            file === 'uploads' ||
            file === '.gitignore' ||
            file.startsWith('.')
        ) {
            return;
        }
        
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else if (
            /\.(js|ts|tsx|jsx|mjs)$/.test(file) &&
            !file.includes('.d.ts')
        ) {
            processFile(fullPath);
        }
    });
}

console.log('Commentləri silmə başlandı...\n');
walkDir('/Users/elarizrecebov/Desktop/back');
console.log('\nTamamlandı!');
