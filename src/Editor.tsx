import {Color} from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import {EditorContent, EditorProvider, useCurrentEditor, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';

const extensions = [
    Color.configure({types: [TextStyle.name, ListItem.name]}),
    TextStyle.configure({types: [ListItem.name]}),
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
        },
    }),
];

const content = localStorage.getItem('summary');

export default () => {
    const editor = useEditor({
        extensions,
        content,
        onUpdate: ({editor}) => {
            const html = editor.getHTML();
            localStorage.setItem('summary', html);
        },
    });

    return <EditorContent editor={editor} />;
};
