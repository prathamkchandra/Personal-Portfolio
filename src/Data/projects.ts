export type Project = {
id: number
title: string
description: string
tech?: string[] | null
demo: string
repo?: string
}

export const projects: Project[] = [
{
id: 1,
title: 'Music Plagiarism Detector',
description: 'CNN-based audio similarity engine using mel-spectrograms and embedding comparison.',
tech: ['Python', 'TensorFlow', 'Next.js'],
demo: '#',
repo: '#',
},
{
id: 2,
title: 'Realtime Posture Monitor',
description: 'Arduino + C++ + Web dashboard for posture detection using FSRs and ML.',
tech: ['C++', 'MQTT', 'React'],
demo: '#',
repo: '#',
},
// Edge-case test entry
{
id: 3,
title: 'Edge Case: Missing Tech Array',
description: 'This entry purposely has a null `tech` field to test defensive rendering.',
tech: null,
demo: '#',
},
]