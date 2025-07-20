import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildPath = join(__dirname, '../dist/public/index.html');

console.log('🔍 فحص ملفات البناء...');

if (!existsSync(buildPath)) {
    console.error('❌ خطأ: ملفات البناء غير موجودة!');
    console.log('💡 الحلول المقترحة:');
    console.log('   1. قم ببناء المشروع: npm run build');
    console.log('   2. أو استخدم وضع التطوير: npm run dev:client');
    console.log('   3. أو استخدم الخادم المنفصل: npm run dev:server');
    process.exit(1);
} else {
    console.log('✅ ملفات البناء موجودة ومتاحة');
}