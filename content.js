// Editable bilingual research content and conceptual illustrations.
window.ROSE_CONTENT = {
  "people": [
    {
      "name": "Prof. Xudong Jiang",
      "initials": "XJ",
      "role": {
        "zh": "研究负责人",
        "en": "Principal Investigator"
      },
      "detail": {
        "zh": "IEEE Fellow",
        "en": "IEEE Fellow"
      },
      "interest": {
        "zh": "研究兴趣待补充",
        "en": "Research interests to be added"
      },
      "photo": "./assets/xudong-jiang.png",
      "profile": "https://personal.ntu.edu.sg/exdjiang/",
      "chineseName": "蒋旭东",
      "institution": {
        "zh": "南洋理工大学",
        "en": "Nanyang Technological University"
      },
      "profileLabel": {
        "zh": "个人主页",
        "en": "Homepage"
      },
      "displayName": {
        "zh": "蒋旭东 教授",
        "en": "Prof. Xudong Jiang"
      }
    },
    {
      "name": "Dr. Song Xia",
      "initials": "SX",
      "role": {
        "zh": "博士后 · ROSE 实验室",
        "en": "Research Fellow · ROSE Lab, NTU"
      },
      "detail": {
        "zh": "南洋理工大学博士",
        "en": "PhD, Nanyang Technological University"
      },
      "interest": {
        "zh": "对抗鲁棒性与鲁棒性认证，视觉基础模型安全，以及协同推理中的隐私保护。",
        "en": "Adversarial robustness and certification, visual foundation model security, and privacy protection in collaborative inference."
      },
      "photo": "./assets/song-xia.jpg",
      "profile": "./assets/song-xia-cv.pdf",
      "profileLabel": {
        "zh": "查看简历",
        "en": "View CV"
      },
      "chineseName": "夏松",
      "displayName": {
        "zh": "夏松",
        "en": "Dr. Song Xia"
      }
    },
    {
      "name": "Dr. Chong Wang",
      "initials": "CW",
      "role": {
        "zh": "博士后 · ROSE 实验室",
        "en": "Research Fellow · ROSE Lab, NTU"
      },
      "detail": {
        "zh": "南洋理工大学博士",
        "en": "PhD, Nanyang Technological University"
      },
      "interest": {
        "zh": "图像与视频复原、成像逆问题，以及基于扩散模型的生成先验与零样本复原。",
        "en": "Image and video restoration, imaging inverse problems, and diffusion-based generative priors for zero-shot restoration."
      },
      "photo": "./assets/chong-wang.jpg",
      "profile": "./assets/chong-wang-cv.pdf",
      "profileLabel": {
        "zh": "查看简历",
        "en": "View CV"
      },
      "chineseName": "王冲",
      "displayName": {
        "zh": "王冲",
        "en": "Dr. Chong Wang"
      }
    },
    {
      "name": "Dr. Zongrui Li",
      "initials": "ZL",
      "role": {
        "zh": "博士后 · ROSE 实验室",
        "en": "Research Fellow · ROSE Lab, NTU"
      },
      "detail": {
        "zh": "南洋理工大学博士",
        "en": "PhD, Nanyang Technological University"
      },
      "interest": {
        "zh": "三维重建与生成、光度立体、神经逆渲染，以及基于生成模型的三维表达。",
        "en": "3D reconstruction and generation, photometric stereo, neural inverse rendering, and generative 3D representations."
      },
      "photo": "./assets/zongrui-li.jpg",
      "profile": "./assets/zongrui-li-cv.pdf",
      "profileLabel": {
        "zh": "查看简历",
        "en": "View CV"
      },
      "chineseName": "李宗瑞",
      "displayName": {
        "zh": "李宗瑞",
        "en": "Dr. Zongrui Li"
      }
    },
    {
      "name": "Meiwen Ding",
      "initials": "MD",
      "role": {
        "zh": "博士研究生 · 南洋理工大学",
        "en": "PhD Student · NTU"
      },
      "detail": {
        "zh": "南洋校长研究生奖学金（NPGS）获得者",
        "en": "Nanyang President’s Graduate Scholarship (NPGS) recipient"
      },
      "interest": {
        "zh": "研究兴趣待补充",
        "en": "Research interests to be added"
      },
      "photo": "./assets/meiwen-ding.jpg",
      "profile": "./assets/meiwen-ding-cv.pdf",
      "profileLabel": {
        "zh": "查看简历",
        "en": "View CV"
      },
      "chineseName": "丁美文",
      "displayName": {
        "zh": "丁美文",
        "en": "Meiwen Ding"
      }
    }
  ],
  "research": [
    {
      "title": {
        "zh": "3D生成与重建",
        "en": "3D Generation & Reconstruction"
      },
      "text": {
        "zh": "从图像与文本出发，研究物体几何、材质和外观的重建与生成，为数字资产制作、数字孪生和虚拟场景构建探索更高效的方法。",
        "en": "Researching how to reconstruct and generate object geometry, materials and appearance from images and text, with applications in digital asset creation, digital twins and virtual environments."
      },
      "results": {
        "intro": {
          "zh": "研究从图像中恢复物体几何、材质与光照，以及由文本生成三维内容的方法，结合光度立体、神经逆渲染和生成模型，探索更准确的形状恢复与更高效的数字资产制作。相关研究面向工业视觉、数字孪生和虚拟场景构建等应用，成果发表于 CVPR、ECCV、ICLR 与 IEEE TPAMI。",
          "en": "We study how to recover object geometry, materials and lighting from images, and how to generate 3D content from text. Combining photometric stereo, neural inverse rendering and generative models, we explore more accurate shape recovery and efficient digital asset creation. Potential applications include industrial vision, digital twins and virtual environment creation. Related work has appeared at CVPR, ECCV, ICLR and in IEEE TPAMI."
        },
        "papers": [
          {
            "title": "Monocular Normal Estimation via Shading Sequence Estimation",
            "venue": "ICLR 2026 · Oral",
            "members": "Zongrui Li · Xudong Jiang",
            "description": {
              "zh": "利用明暗变化序列估计表面法线，研究单目几何恢复。",
              "en": "Estimates surface normals through shading sequences for monocular geometry recovery."
            },
            "url": "https://openreview.net/forum?id=d7itDxMD1n"
          },
          {
            "title": "Connecting Consistency Distillation to Score Distillation for Text-to-3D Generation",
            "venue": "ECCV 2024",
            "members": "Zongrui Li · Xudong Jiang",
            "description": {
              "zh": "连接一致性蒸馏与分数蒸馏，研究文本到三维资产的生成。",
              "en": "Connects consistency and score distillation for text-to-3D asset generation."
            },
            "url": "https://www.ecva.net/papers/eccv_2024/papers_ECCV/html/5982_ECCV_2024_paper.php"
          },
          {
            "title": "DANI-Net: Uncalibrated Photometric Stereo by Differentiable Shadow Handling, Anisotropic Reflectance Modeling, and Neural Inverse Rendering",
            "venue": "CVPR 2023",
            "members": "Zongrui Li · Xudong Jiang",
            "description": {
              "zh": "结合阴影处理、反射建模与神经逆渲染进行三维形状恢复。",
              "en": "Combines shadow handling, reflectance modeling and neural inverse rendering for shape recovery."
            },
            "url": "https://openaccess.thecvf.com/content/CVPR2023/html/Li_DANI-Net_Uncalibrated_Photometric_Stereo_by_Differentiable_Shadow_Handling_Anisotropic_Reflectance_CVPR_2023_paper.html"
          },
          {
            "title": "Revisiting Supervised Learning-Based Photometric Stereo Networks",
            "venue": "IEEE TPAMI 2025",
            "members": "Zongrui Li · Xudong Jiang",
            "description": {
              "zh": "研究监督式光度立体网络，用于表面几何估计。",
              "en": "Studies supervised photometric stereo networks for surface geometry estimation."
            },
            "url": "https://ieeexplore.ieee.org/document/10948383"
          }
        ]
      },
      "illustration": {
        "src": "./assets/research-3d-future.png",
        "alt": {
          "zh": "3D生成与重建概念图：结构光扫描下的点云、网格与金属实体",
          "en": "Concept illustration: structured-light scanning, point clouds and reconstructed metal geometry"
        }
      }
    },
    {
      "title": {
        "zh": "安全可靠的 AI 部署",
        "en": "Safe & Reliable AI Deployment"
      },
      "text": {
        "zh": "面向企业和用户的实际需求，研究 AI 接入与使用中的数据隐私、模型安全和运行可靠性，帮助 AI 更稳妥地应用于业务场景。",
        "en": "Addressing practical business and user needs through research on data privacy, model security and operational reliability, helping AI work more safely in real applications."
      },
      "results": {
        "intro": {
          "zh": "关注 AI 应用落地中的实际问题：用户上传的数据如何保护，模型面对恶意输入时能否保持可靠，AI 服务如何在复杂环境中稳定工作。围绕这些问题开展风险评估、隐私保护与安全防护研究，支持企业探索更可信的 AI 应用。相关成果发表于 CVPR、NeurIPS、ICLR、IEEE TIFS 与 IEEE TMM。",
          "en": "We study practical questions in AI adoption: how to protect uploaded data, how models respond to malicious inputs, and how AI services can remain dependable in challenging conditions. Our research covers risk assessment, privacy protection and safeguards to support more trustworthy business applications, with related publications at CVPR, NeurIPS, ICLR, IEEE TIFS and IEEE TMM."
        },
        "papers": [
          {
            "title": "Reconciling Stochastic and Deterministic Strategies for Zero-shot Image Restoration using Diffusion Model in Dual",
            "venue": "CVPR 2025",
            "members": "Chong Wang",
            "description": {
              "zh": "结合确定性去噪与随机采样，研究零样本图像复原。",
              "en": "Combines deterministic denoising and stochastic sampling for zero-shot restoration."
            },
            "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Wang_Reconciling_Stochastic_and_Deterministic_Strategies_for_Zero-shot_Image_Restoration_using_CVPR_2025_paper.html"
          },
          {
            "title": "Mitigating the Curse of Dimensionality for Certified Robustness via Dual Randomized Smoothing",
            "venue": "ICLR 2024",
            "members": "Song Xia · Xudong Jiang",
            "description": {
              "zh": "通过双重随机平滑研究图像分类器的可认证鲁棒性。",
              "en": "Studies certified classifier robustness through dual randomized smoothing."
            },
            "url": "https://proceedings.iclr.cc/paper_files/paper/2024/hash/825341ab91db01bf063add41ac022702-Abstract-Conference.html"
          },
          {
            "title": "Transferable Adversarial Attacks on SAM and Its Downstream Models",
            "venue": "NeurIPS 2024",
            "members": "Song Xia · Xudong Jiang",
            "description": {
              "zh": "评估 SAM 及其下游模型的对抗脆弱性与攻击迁移性。",
              "en": "Examines adversarial vulnerability and transferability in SAM and downstream models."
            },
            "url": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/9f73d65a4186198152357be871345771-Abstract-Conference.html"
          },
          {
            "title": "Theoretical Insights in Model Inversion Robustness and Conditional Entropy Maximization for Collaborative Inference Systems",
            "venue": "CVPR 2025 · Highlight",
            "members": "Song Xia · Meiwen Ding · Xudong Jiang",
            "description": {
              "zh": "通过条件熵最大化研究协同推理中的模型反演隐私风险。",
              "en": "Studies model-inversion privacy risks in collaborative inference through conditional entropy maximization."
            },
            "url": "https://openaccess.thecvf.com/content/CVPR2025/html/Xia_Theoretical_Insights_in_Model_Inversion_Robustness_and_Conditional_Entropy_Maximization_CVPR_2025_paper.html"
          },
          {
            "title": "Transferable Adversarial Attack on Referring Video Object Segmentation",
            "venue": "IEEE TIFS 2026",
            "members": "Meiwen Ding · Song Xia · Xudong Jiang",
            "description": {
              "zh": "研究语言指代视频分割模型的对抗鲁棒性与跨模型攻击。",
              "en": "Studies adversarial robustness and cross-model attacks in referring video segmentation."
            },
            "url": "https://doi.org/10.1109/TIFS.2026.3683292"
          },
          {
            "title": "Taming Noise Initialization for Zero-shot Video Restoration with Image Diffusion Priors",
            "venue": "IEEE TMM 2026",
            "members": "Chong Wang",
            "description": {
              "zh": "研究利用图像扩散先验进行零样本视频复原。",
              "en": "Investigates image diffusion priors for zero-shot video restoration."
            },
            "url": "https://doi.org/10.1109/TMM.2026.3739474"
          }
        ]
      },
      "illustration": {
        "src": "./assets/research-ai-privacy-v2.png",
        "alt": {
          "zh": "安全可靠的 AI 部署概念图：AI 助手中的隐私文档、受保护的数据通道与恶意输入拦截",
          "en": "Concept illustration: private documents in an AI assistant, protected data processing and blocked malicious inputs"
        }
      }
    },
    {
      "title": {
        "zh": "世界模型与具身智能",
        "en": "World Models & Embodied AI"
      },
      "text": {
        "zh": "面向智能体的环境理解、未来状态预测与行动规划，探索世界模型和动态场景建模，并研究其在具身交互中的安全性与可靠性。",
        "en": "Exploring world models and dynamic scene modeling for environment understanding, future-state prediction and action planning, alongside their safety and reliability in embodied interaction."
      },
      "results": {
        "intro": {
          "zh": "面向机器人交互、智能体规划与动态场景仿真，结合动态三维表达和场景感知，探索能够理解环境变化、预测行动结果的世界模型。在此基础上，研究视觉扰动与物理攻击对模型预测及下游决策的影响，探索更安全、可靠的具身交互。相关成果涵盖 CVPR 论文、世界模型安全预印本及 ICLR 2027 在审投稿。",
          "en": "For applications in robot interaction, agent planning and dynamic scene simulation, we draw on dynamic 3D representations and scene perception to explore world models that understand environmental changes and predict action outcomes. We then study how visual perturbations and physical attacks affect model predictions and downstream decisions, working toward safer, more reliable embodied interaction. Related work includes CVPR publications, a world-model security preprint and an ICLR 2027 submission under review."
        },
        "papers": [
          {
            "title": "Attacking Action Discriminability in Latent World Models",
            "venue": "ICLR 2027 · Submission / Under Review",
            "members": "Meiwen Ding · Xudong Jiang",
            "description": {
              "zh": "通过抑制潜在动力学中的动作敏感性、扰乱多步预测，研究潜在世界模型及下游规划的对抗安全。",
              "en": "Studies adversarial security of latent world models and downstream planning by suppressing action sensitivity and disrupting multi-step predictions."
            },
            "url": "https://openreview.net/forum?id=RsRxs7m9PC"
          },
          {
            "title": "Across Viewpoints and Time: Trajectory-Generalizable Physical Attacks on World Models and Video Understanding Models",
            "venue": "arXiv 2026 · Preprint",
            "members": "Song Xia · Meiwen Ding · Xudong Jiang",
            "description": {
              "zh": "研究跨视角、跨时间轨迹的物理对抗攻击，评估世界模型与视频理解模型在真实物理环境中的安全性。",
              "en": "Studies trajectory-generalizable physical adversarial attacks across viewpoints and time to evaluate world models and video understanding models under real-world conditions."
            },
            "url": "https://arxiv.org/abs/2610.15343"
          },
          {
            "title": "RigMo: Unifying Rig and Motion Learning for Generative Animation",
            "venue": "CVPR 2026",
            "members": "Zongrui Li",
            "description": {
              "zh": "联合学习骨架结构与运动，研究可动画化的动态三维表达。",
              "en": "Jointly learns rig structure and motion for animatable dynamic 3D representations."
            },
            "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_RigMo_Unifying_Rig_and_Motion_Learning_for_Generative_Animation_CVPR_2026_paper.html"
          },
          {
            "title": "RF4D: Neural Radar Fields for Novel View Synthesis in Outdoor Dynamic Scenes",
            "venue": "CVPR 2026",
            "members": "Chong Wang",
            "description": {
              "zh": "以雷达神经场研究户外动态场景的新视角合成与感知。",
              "en": "Uses radar neural fields for novel-view synthesis and perception in dynamic outdoor scenes."
            },
            "url": "https://openaccess.thecvf.com/content/CVPR2026/html/Zhang_RF4DNeural_Radar_Fields_for_Novel_View_Synthesis_in_Outdoor_Dynamic_CVPR_2026_paper.html"
          }
        ]
      },
      "illustration": {
        "src": "./assets/research-world-models-future.png",
        "alt": {
          "zh": "世界模型与具身智能概念图：真实机械臂、数字孪生与未来动作轨迹",
          "en": "Concept illustration: robotic manipulation, digital twins and predicted future motion"
        }
      }
    }
  ]
};
window.ROSE_TRANSLATIONS = {
  "zh": {
    "skip": "跳转至内容",
    "team": "研究团队",
    "research": "研究方向",
    "supervisor": "研究负责人",
    "core": "核心成员",
    "viewResults": "相关成果",
    "published": "代表性研究成果",
    "cvSource": "成员 CV",
    "navTeam": "研究团队",
    "navResearch": "研究方向"
  },
  "en": {
    "skip": "Skip to content",
    "team": "Research team",
    "research": "Research directions",
    "supervisor": "Principal Investigator",
    "core": "Core members",
    "viewResults": "Related work",
    "published": "Selected research",
    "cvSource": "Member CV",
    "navTeam": "Team",
    "navResearch": "Research"
  }
};
